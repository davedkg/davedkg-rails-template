class PasswordsController < Devise::PasswordsController

  layout "splash"

  before_action :validate_reset_password_token, only: :edit

  def edit
    super
  end

  private

  def page_title_hash
    {
      new: "Forgot Password?",
      create: "Forgot Password?",
      edit: "Change Password",
      update: "Change Password"
    }
  end

  def validate_reset_password_token
    recoverable = resource_class.with_reset_password_token(params[:reset_password_token])

    if !recoverable || !recoverable.reset_password_period_valid?
      flash[:alert] = "Recover password link has expired. You must resend a reset link again."
      redirect_to new_user_password_path
    end
  end

end