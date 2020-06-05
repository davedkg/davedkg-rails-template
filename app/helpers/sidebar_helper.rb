# frozen_string_literal: true

module SidebarHelper
  def active_sidebar_tab(active)
    'navigation__active' if active
  end
end
