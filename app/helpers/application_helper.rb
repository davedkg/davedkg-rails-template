module ApplicationHelper
  
  def active_tab_class(tab, current_tag)
    'active' if current_tag == tab
  end
  
  def active_class_for_controller(controller)
    'navigation__active' if params[:controller].to_sym == controller
  end
  
end
