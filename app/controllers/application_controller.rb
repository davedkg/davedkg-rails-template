class ApplicationController < ActionController::Base
  include PageTitleable
  include Pundit

  rescue_from Pundit::NotAuthorizedError,   with: :render_page_not_found
  rescue_from ActiveRecord::RecordNotFound, with: :render_page_not_found

  before_action :authenticate_user!
  before_action :set_turbolinks_animation
  before_action :set_raven_context
  before_action :configure_permitted_parameters, if: :devise_controller?
  after_action  :verify_authorized, unless: :devise_controller?

  private

  def authenticate_admin!
    redirect_to root_path unless current_user.admin?
  end

  def set_turbolinks_animation
    turbolinks_animate "fadein"
  end

  def prevent_action
    redirect_to root_path
  end

  def render_page_not_found
    respond_to do |format|
      format.html do
        render file: Rails.root.join("public", "404.html"), layout: false, status: :not_found
      end
      format.any do
        head :not_found
      end
    end
  end

  def set_raven_context
    if defined?(Raven)
      Raven.user_context(id: current_user.id) if current_user
      Raven.extra_context(params: params.to_unsafe_h, url: request.url)
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
