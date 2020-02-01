class UsersController < ApplicationController

  before_action :set_user, except: [ :index, :new, :create ]

  breadcrumb "Users", :users_path
  breadcrumb "Invite User", :new_user_path, only: [ :new, :create ]

  def index
    @users = authorize User.order(email: :asc).page(params[:page])
  end

  def new
    @user = authorize User.new
  end

  def create
    @user = authorize User.invite!(user_params, current_user)

    if @user.valid?
      redirect_to users_path, notice: 'User was successfully invited.'
    else
      render :new
    end
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
    @user = authorize User.find(params[:id])
  end

  def page_title_hash
    super.merge({
      new: "Invite User",
      create: "Invite User"
    })
  end

end
