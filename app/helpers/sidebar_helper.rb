# frozen_string_literal: true

module SidebarHelper
  def active_sidebar_tab(active)
    'navigation__active' if active
  end

  def active_sidebar_tab_for_path(path)
    active_sidebar_tab(request.path.start_with?(path))
  end

  def active_sidebar_tab_for_admin
    'navigation__sub--active navigation__sub--toggled' if [
      web_components_path
    ].include?(request.path)
  end
end
