class ApplicationController < ActionController::Base

  before_action :authenticate_user!, except: [ :ping ]
  before_action :set_time_zone
  before_action :set_raven_context
  after_action  :stamp_session!
  protect_from_forgery prepend: true, with: :exception

  def ping
    render json: { working: User.count }
  end

  private

  def ip_address
    request.remote_ip
  end

  def current_session
    @current_session ||= current_user.sessions.where(auth_token: warden.raw_session['auth_token']).first if nil != current_user && nil != warden.raw_session['auth_token']
  end

  def stamp_session!
    current_session.stamp!(ip_address) if nil != current_session
  end

  # Devie -> Overwriting the sign_out redirect path method
  def after_sign_out_path_for(resource_or_scope)
    new_user_session_path
  end

  def set_time_zone
    Time.zone = current_user.time_zone if current_user
  end

  def set_raven_context
    if defined?(Raven)
      Raven.user_context(
        id: current_user.id.to_s,
        email: current_user.email,
        ip_address: request.ip,
      ) if current_user

      Raven.extra_context(params: params.to_unsafe_h, url: request.url)
    end
  end

end
