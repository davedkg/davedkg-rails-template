module Inputs
  module Stimulusable
    include ::Stimulusable

    def input_html_options
      options = super

      add_stimulus_options(options)

      options
    end

    protected

    def stimululs_controller_name
      @stimululs_controller_name ||= "inputs--#{self.class.to_s.titleize.parameterize}"
    end

    def add_stimulus_options(options)
      data = options[:data] || {}

      add_stimulus_controller(data, stimululs_controller_name)

      options[:data] = data
    end
  end
end
