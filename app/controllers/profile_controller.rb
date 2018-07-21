class ProfileController < ApplicationController
  
  before_action :set_page_title
  before_action :set_user
  before_action :set_breadcrumbs, except: [ :show ]
  
  def show
  end

  def edit
  end
  
  def update
    if @user.update(user_params)
      redirect_to profile_path, notice: 'Profile was sucessfully updated.'
    else
      render :edit
    end
  end
  
  private
  
  def set_user
    @user = current_user
  end
  
  def user_params
    params.require(:user).permit(:first_name, :last_name)
  end
  
  def set_page_title
    @page_title = 'Profile'
  end
  
  def set_breadcrumbs
    add_breadcrumb "Profile", profile_path
  end
  
end
