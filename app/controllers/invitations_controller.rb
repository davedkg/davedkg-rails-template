class InvitationsController < Devise::InvitationsController
  
  layout 'empty'
  
  before_action :set_page_title
  before_action :configure_permitted_parameters
  
  # Prevent
  def new
    redirect_to root_path
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:accept_invitation, keys: [:first_name, :last_name])
  end
  
  private
  
  def set_page_title
    @page_title = 'Intitations'
  end

end