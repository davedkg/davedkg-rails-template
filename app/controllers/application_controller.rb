class ApplicationController < ActionController::Base
  include Pundit::Authorization

  allow_browser versions: :modern

  before_action :authenticate_user!
  before_action :set_time_zone
  before_action :set_raven_context
  before_action :configure_permitted_parameters, if: :devise_controller?
  after_action  :verify_authorized, unless: -> { devise_controller? || application_controller? }

  rescue_from Pundit::NotAuthorizedError,   with: :render_page_not_found
  rescue_from ActiveRecord::RecordNotFound, with: :render_page_not_found

  def root
    if policy(:dashboard).show?
      redirect_to dashboard_path
    else
      redirect_to user_path(current_user)
    end
  end

  private

  def prevent_action
    redirect_to root_path
  end

  def application_controller?
    "application" == params[:controller]
  end

  def set_time_zone
    Time.zone = current_user.time_zone if current_user
  end

  def set_raven_context
    return unless defined?(Raven)

    Raven.user_context(id: current_user.id) if current_user
    # Raven.extra_context(params: params.to_unsafe_h, url: request.url)
  end

  def render_page_not_found
    respond_to do |format|
      format.html do
        render file: Rails.public_path.join("404.html"), layout: false, status: :not_found
      end
      format.any do
        head :not_found
      end
    end
  end

  ## *** Devise

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:accept_invitation, keys: %i[name time_zone])
  end

  def after_sign_out_path_for(*)
    new_user_session_path
  end
end
