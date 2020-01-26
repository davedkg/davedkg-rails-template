class UsersController < ApplicationController

  before_action :set_user, except: [ :index, :new, :create ]

  breadcrumb "Users", :users_path
  breadcrumb "New User", :new_user_path, only: [ :new, :create ]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    User.invite!(user_params, current_user)

    redirect_to users_path, notice: 'User was successfully invited.'
  end

  def destroy
    @user.destroy

    redirect_to users_path, notice: "User was successfully deleted."
  end

  def resend_invitation
    @user.send_invitation

    redirect_to users_path, notice: 'Invitation was sucessfully resent.'
  end

  private

  def user_params
    params.require(:user).permit(:email)
  end

  def set_user
    @user = User.find(params[:id])
  end

end
