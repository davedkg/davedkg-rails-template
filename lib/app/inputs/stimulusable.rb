module Inputs::Stimulusable
  include Stimulusable

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
    Hash.new
  end

  def add_stimulus_options(options)
    options[:data] ||= {}

    add_stimulus_controller(options[:data], stimululs_controller_name)
    add_stimulus_data_attributes(options[:data], stimululs_controller_name)
  end

  def add_stimulus_data_attributes(data, controller)
    stimulus_data_attributes.each do |key, value|
      param_key       = "#{controller}-#{key.to_s.parameterize}"
      data[param_key] = value if !data.key(param_key)
    end
  end

end