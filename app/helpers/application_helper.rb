module ApplicationHelper

  def active_sidebar_tab(controller)
    'active' if params[:controller].to_sym == controller
  end

end
