# frozen_string_literal: true

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

    def stimulus_data_attributes
      {}
    end

    def add_stimulus_options(options)
      data = options[:data] || {}

      add_stimulus_controller(data, stimululs_controller_name)
      add_stimulus_data_attributes(data, stimululs_controller_name)

      options[:data] = data
    end

    def add_stimulus_data_attributes(data, controller)
      stimulus_data_attributes.each do |key, value|
        param_key       = "#{controller}-#{key.to_s.parameterize}"
        data[param_key] = value unless data.key(param_key)
      end
    end
  end
end
