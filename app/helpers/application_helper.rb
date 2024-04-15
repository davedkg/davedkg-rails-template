# frozen_string_literal: true

module ApplicationHelper
  include Stimulusable

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

  def form_for(record, options = {}, &)
    data = options[:data] || {}

    add_stimulus_controller(data, 'form')

    options[:data] = data

    super
  end
end
