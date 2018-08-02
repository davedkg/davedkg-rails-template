class ConfirmationsController <  Devise::ConfirmationsController
  
  layout 'empty'
  
  before_action :set_page_title
  
  # prevent access for now
  def new
    redirect_to root_path
  end
  
  # prevent access for now
  def create
    redirect_to root_path
  end
  
  private
  
  def set_page_title
    @page_title = 'Confirmtions'
  end
  
end
