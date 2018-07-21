class UsersController < ApplicationController
  
  before_action :set_page_title
  before_action :set_breadcrumbs, except: [ :index ]
  before_action :set_user, except: [ :index, :new, :create ]
  
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
  
  def resend_invitation
    @user.send_invitation 
    
    redirect_to users_path, notice: 'Invitation was sucessfully resent.'
  end
  
  def destroy
    @user.destroy
    
    redirect_to users_path, notice: 'User was successfully destroyed.'
  end
  
  private
  
  def set_user
    @user = User.find(params[:id])
  end
  
  def user_params
    params.require(:user).permit(:email)
  end
  
  def set_page_title
    @page_title = 'Users'
  end
  
  def set_breadcrumbs
    add_breadcrumb "Users", users_path
  end
  
end
