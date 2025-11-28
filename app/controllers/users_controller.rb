class UsersController < ApplicationController
  before_action :set_user, except: %i[index new create]

  breadcrumb "Users", :users_path, except: [ :index ], if: -> { policy(User).index? }

  PER_PAGE = 10

  def index
    @users = authorize policy_scope(User).order(created_at: :desc).page(params[:page]).per(PER_PAGE)
  end

  def show; end

  def new
    @user = authorize User.new
  end

  def create
    @user = authorize User.new
    @user.attributes               = permitted_attributes(@user)
    @user.invited_by               = current_user
    @user.skip_password_validation = true

    if @user.valid? && @user.invite!
      redirect_to @user, notice: "User was successfully invited."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy

    redirect_to users_path(format: :html), notice: "User was successfully archived."
  end

  def resend_invitation_email
    @user.invite!

    redirect_to @user, notice: "Invitation email was sucessfully resent."
  end

  def send_reset_password_email
    @user.send_reset_password_instructions

    redirect_to @user, notice: "Password reset email was successfully sent."
  end

  def enable
    @user.enabled!

    redirect_to @user, notice: "User was successfully enabled."
  end

  def disable
    @user.disabled!

    redirect_to @user, notice: "User was successfully disabled."
  end

  private

  def set_user
    @user = authorize policy_scope(User).find(params[:id])
  end

  def page_title_hash
    super.merge({
                  new: "Invite User",
                  create: "Invite User",
                  show: @user&.name || @user&.email
                })
  end
end
