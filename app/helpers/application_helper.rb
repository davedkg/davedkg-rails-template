module ApplicationHelper
  include Stimulusable

  MODAL_SIZES = {
    xl: 'modal-xl',
    large: 'modal-lg',
    small: 'modal-sm'
  }.freeze

  def modal_size_class(modal_size)
    MODAL_SIZES[modal_size]
  end

  def active_sidebar_tab_for_path(path)
    "#{request.path.start_with?(path) ? 'active current-page' : nil}"
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

  def merge_html_options(html_options)
    return html_options if html_options.nil? || html_options[:modal] != true

    html_options.delete(:modal)
    html_options[:data] ||= {}
    html_options[:data]['controller'] = 'turbo'
    html_options[:data]['turbo-prefetch'] = false

    html_options
  end
end
