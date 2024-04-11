# frozen_string_literal: true

# :reek:TooManyMethods
class UsersController < ApplicationController
  before_action :set_user, except: %i[index new create]

  breadcrumb 'Users', :users_path, except: [:index], if: -> { policy(User).index? }
  breadcrumb -> { @user&.name }, -> { user_path(@user) }, only: %i[edit update]

  def index
    @users = authorize User.order(name: :asc).page(params[:page])
  end

  def show; end

  def new
    @user = authorize User.new
  end

  def edit; end

  def create
    @user = authorize User.new
    @user.attributes               = permitted_attributes(@user)
    @user.invited_by               = current_user
    @user.skip_password_validation = true

    if @user.valid? && @user.invite!
      redirect_to @user, notice: 'User was successfully invited.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(permitted_attributes(@user))
      redirect_to @user, notice: 'User was successfully updated.'
    else
      render 'update_user_failed'
    end
  end

  def destroy
    @user.destroy

    redirect_to users_path, notice: 'User was successfully deleted.'
  end

  def update_password
    if @user.update(permitted_attributes(@user))
      bypass_sign_in(@user)
      redirect_to @user, notice: 'Password was successfully updated.'
    else
      render 'update_password_failed'
    end
  end

  def resend_invitation_email
    @user.send_invitation

    redirect_to @user, notice: 'Invitation email was sucessfully resent.'
  end

  def send_reset_password_email
    @user.send_reset_password_instructions

    redirect_to @user, notice: 'Reset password email was successfully sent.'
  end

  def unlock
    @user.unlock_access!

    redirect_to @user, notice: 'User was successfully unlocked.'
  end

  def enable
    @user.enabled!

    redirect_to @user, notice: 'User was successfully enabled.'
  end

  def disable
    @user.disabled!

    redirect_to @user, notice: 'User was successfully disabled.'
  end

  private

  def set_user
    @user = authorize User.find(params[:id])
  end

  def page_title_hash
    super.merge({
                  new: 'Invite User',
                  create: 'Invite User',
                  show: @user&.display_name
                })
  end
end
