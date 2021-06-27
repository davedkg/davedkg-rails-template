# frozen_string_literal: true

module LinkToHelper
  # :reek:DuplicateMethodCall
  def link_to(name = nil, options = nil, html_options = {}, &block)
    if block_given?
      html_options = options
      options = name
      return super(options, merge_html_options(html_options).to_h, &block)
    end
    super(name, options, merge_html_options(html_options).to_h)
  end

  private

  def merge_html_options(html_options)
    return html_options if nil == html_options || true != html_options[:modal]

    html_options.delete(:modal)
    html_options[:remote] = true
    (html_options[:data] ||= {}).merge!(
      turbolinks: false,
      controller: 'ajax-modal',
      action: 'ajax:success->ajax-modal#success ajax:error->ajax-modal#error'
    )

    html_options
  end
end
