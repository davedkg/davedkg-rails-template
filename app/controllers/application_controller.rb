class ApplicationController < ActionController::Base
  include PageTitleable

  before_action :authenticate_user!

  private

  ## *** Devise Overrides

  def after_sign_out_path_for(*)
    new_user_session_path
  end

end
