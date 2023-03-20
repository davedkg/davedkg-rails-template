# frozen_string_literal: true

require 'action_text'

class ApplicationController < ActionController::Base
  include PageTitleable
  include Pundit
  include Turbo::Redirection

  helper ActionText::Engine.helpers

  rescue_from Pundit::NotAuthorizedError,   with: :render_page_not_found
  rescue_from ActiveRecord::RecordNotFound, with: :render_page_not_found

  before_action :authenticate_user!
  before_action :set_time_zone
  before_action :set_raven_context
  before_action :configure_permitted_parameters, if: :devise_controller?
  after_action  :verify_authorized, unless: -> { devise_controller? || application_controller? }

  def root
    if policy(:dashboard).show?
      redirect_to dashboard_path
    else
      redirect_to user_path(current_user)
    end
  end

  private

  def set_modal_size(modal_size)
    @modal_size = modal_size
  end

  def set_use_full_width_layout
    @use_full_width_layout = true
  end

  helper_method :use_full_width_layout?
  def use_full_width_layout?
    true == @use_full_width_layout
  end

  def authenticate_admin!
    redirect_to root_path unless current_user.admin?
  end

  def prevent_action
    redirect_to root_path
  end

  def application_controller?
    'application' == params[:controller]
  end

  def render_page_not_found
    respond_to do |format|
      format.html do
        render file: Rails.root.join('public/404.html'), layout: false, status: :not_found
      end
      format.any do
        head :not_found
      end
    end
  end

  def set_time_zone
    Time.zone = current_user.time_zone if current_user
  end

  def set_raven_context
    return unless defined?(Raven)

    Raven.user_context(id: current_user.id) if current_user
    Raven.extra_context(params: params.to_unsafe_h, url: request.url)
  end

  ## *** Devise

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:accept_invitation, keys: %i[name time_zone])
  end

  def after_sign_out_path_for(*)
    new_user_session_path
  end
end
