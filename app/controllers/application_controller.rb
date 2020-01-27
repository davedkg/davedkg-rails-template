class ApplicationController < ActionController::Base
  include PageTitleable
  include Pundit

  rescue_from Pundit::NotAuthorizedError,   with: :render_page_not_found
  rescue_from ActiveRecord::RecordNotFound, with: :render_page_not_found

  before_action :authenticate_user!
  before_action :set_turbolinks_animation
  after_action  :verify_authorized, unless: :devise_controller?

  private

  def set_turbolinks_animation
     turbolinks_animate "fadeIn"
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

  ## *** Devise

  def after_sign_out_path_for(*)
    new_user_session_path
  end

end
