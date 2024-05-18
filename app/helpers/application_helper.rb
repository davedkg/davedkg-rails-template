# frozen_string_literal: true

module ApplicationHelper
  include Stimulusable

  def simple_form_for(record, options = {}, &)
    data = options[:data] || {}
    add_stimulus_controller(data, 'form')
    options[:data] = data
    super
  end

  def active_sidebar_tab_for_path(path)
    "nav-link mininav-toggle #{request.path.start_with?(path) ? 'active' : nil}"
  end
end
