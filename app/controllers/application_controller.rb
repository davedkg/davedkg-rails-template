class ApplicationController < ActionController::Base

  before_action :authenticate_user!, except: [ :ping ]
  before_action :set_time_zone
  before_action :set_raven_context
  protect_from_forgery prepend: true, with: :exception
  
  def ping
    render json: { working: User.count }
  end
  
  private
  
  def set_time_zone
    Time.zone = current_user.time_zone if current_user
  end

  def set_raven_context
    Raven.user_context(
      id: current_user.id.to_s,
      primary_email: current_user.email,
      ip_address: request.ip,
    ) if current_user && defined?(Raven)
    
    Raven.tags_context(
      language: I18n.locale, 
      timezone: current_user.time_zone,
    ) if current_user && defined?(Raven)
    
    Raven.extra_context(params: params.to_unsafe_h, url: request.url) if defined?(Raven) # FIXME filter params
  end
end
