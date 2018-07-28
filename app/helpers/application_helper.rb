module ApplicationHelper
  
  def active_tab_class(tab)
    'active' if tab == @tab
  end
  
  def active_class_for_controller(c)
    'navigation__active' if params[:controller].to_sym == c
  end
  
end
