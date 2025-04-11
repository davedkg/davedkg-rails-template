class ApplicationController < ActionController::Base
  include Pundit::Authorization
  include PageTitleable

  allow_browser versions: :modern

  before_action :authenticate_user!
  before_action :set_time_zone
  before_action :set_sentry_context
  before_action :configure_permitted_parameters, if: :devise_controller?
  after_action  :verify_authorized, unless: -> { devise_controller? || application_controller? }

  rescue_from Pundit::NotAuthorizedError,   with: :render_page_not_found
  rescue_from ActiveRecord::RecordNotFound, with: :render_page_not_found

  def root
    if policy(:dashboard).show?
      redirect_to dashboard_path
    else
      redirect_to me_path
    end
  end

  private

  def set_modal_size(modal_size)
    @modal_size = modal_size
  end

  def application_controller?
    "application" == params[:controller]
  end

  def set_time_zone
    Time.zone = current_user.time_zone if current_user
  end

  def set_sentry_context
    Sentry.set_user(id: current_user.id) if defined?(Sentry) && current_user
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
