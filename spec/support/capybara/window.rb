module Capybara
  class Window
    CAPYBARA_WINDOW_SIZES = %i[xs sm md lg xl].freeze

    def resize_to_preset(preset)
      dimensions = case preset
      when :xs, :extra_small, :sm, :small
                     [ 576, 627 ]
      when :md, :medium
                     [ 768, 640 ]
      when :lg, :large
                     [ 992, 768 ]
      when :xl, :extra_large
                     [ 1200, 800 ]
      else
                     raise ArgumentError, "#{preset} is not a valid preset"
      end
      resize_to(*dimensions)
    end
  end
end

Selenium::WebDriver.logger.ignore(:clear_local_storage, :clear_session_storage)
