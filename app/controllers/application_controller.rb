class ApplicationController < ActionController::Base
  before_action :set_raven_context
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  
  private

  def set_raven_context
    if defined?(Raven)
      # Raven.user_context(id: session[:current_user_id]) # or anything else in session
      Raven.extra_context(params: params.to_unsafe_h, url: request.url)
    end
  end
end
