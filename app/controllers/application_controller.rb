class ApplicationController < ActionController::Base
  include PageTitleable

  before_action :authenticate_user!
  before_action :set_turbolinks_animation

  private

  def set_turbolinks_animation
     turbolinks_animate "fadeIn"
   end

  def prevent_action
    redirect_to root_path
  end

  ## *** Devise

  def after_sign_out_path_for(*)
    new_user_session_path
  end

end
