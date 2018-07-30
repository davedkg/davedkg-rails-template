class ConfirmationsController <  Devise::ConfirmationsController
  
  layout 'empty'
  
  before_action :set_page_title
  
  private
  
  def set_page_title
    @page_title = 'Confirmtions'
  end
  
end
