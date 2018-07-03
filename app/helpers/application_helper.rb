module ApplicationHelper
  
  def active_class_for_controller(c)
    'navigation__active' if params[:controller].to_sym == c
  end
  
end
