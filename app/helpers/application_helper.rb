# frozen_string_literal: true

module ApplicationHelper
  def append_active_if_path(css, path)
    if request.path.start_with?(path)
      "#{css} active"
    else
      css
    end
  end

  def active_admin_tab_class
    'active' if [
      web_components_path
    ].include?(request.path)
  end
end
