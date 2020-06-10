# frozen_string_literal: true

module LayoutHelper
  def layout_navigation_trigger_class
    if use_full_width_layout?
      'd-block'
    else
      'hidden-xl-up'
    end
  end

  def layout_sidebar_class
    'sidebar--hidden' if use_full_width_layout?
  end

  def layout_content_class
    'content--full' if use_full_width_layout?
  end
end
