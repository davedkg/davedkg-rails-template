# frozen_string_literal: true

module ApplicationHelper
  def active_sidebar_tab_for_path(path)
    "nav-link mininav-toggle #{request.path.start_with?(path) ? 'active' : nil}"
  end
end
