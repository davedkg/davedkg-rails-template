# frozen_string_literal: true

module ApplicationHelper
  def active_sidebar_link_for_path(path)
    if request.path.start_with?(path)
      'sidebar-link active'
    else
      'sidebar-link'
    end
  end
end
