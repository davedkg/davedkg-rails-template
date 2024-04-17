# frozen_string_literal: true

module ApplicationHelper
  include Stimulusable

  MODAL_SIZES = {
    xl: 'modal-xl',
    large: 'modal-lg',
    small: 'modal-sm'
  }.freeze

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

  def modal_size_class(modal_size)
    MODAL_SIZES[modal_size]
  end

  def form_for(record, options = {}, &)
    options[:data] ||= {}

    add_stimulus_controller(options[:data], 'form')

    super
  end

  def link_to(name = nil, options = nil, html_options = {}, &)
    if block_given?
      html_options = options
      options = name
      super(options, merge_html_options(html_options).to_h, &)
    else
      super(name, options, merge_html_options(html_options).to_h)
    end
  end

  private

  # :reek:NilCheck
  def merge_html_options(html_options)
    return html_options if html_options.nil? || html_options[:modal] != true

    html_options.delete(:modal)
    html_options[:data] ||= {}
    html_options[:data]['controller'] = 'turbo'
    html_options[:data]['turbo-prefetch'] = false

    html_options
  end
end
