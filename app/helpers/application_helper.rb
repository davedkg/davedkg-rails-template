module ApplicationHelper
  def active_sidebar_tab_for_path(path)
    "#{request.path.start_with?(path) ? 'active current-page' : nil}"
  end
end
