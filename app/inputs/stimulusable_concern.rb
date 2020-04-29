module StimulusableConcern
  extend ActiveSupport::Concern

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
    options[:data] ||= {}

    add_stimulus_controller(options[:data], stimululs_controller_name)
    add_stimulus_data_attributes(options[:data], stimululs_controller_name)
  end

  def add_stimulus_controller(data, controller_name)
    controllers = (data[:controller] || "").split(" ")

    controllers << controller_name if !controllers.include?(controller_name)

    data[:controller] = controllers.join(" ")
  end

  def add_stimulus_action(data, action)
    actions = (data[:action] || "").split(" ")

    actions << action if !actions.include?(action)

    data[:action] = actions.join(" ")
  end

  def add_stimulus_data_attributes(data, controller_name)
    stimulus_data_attributes.each do |key, value|
      param_key       = "#{controller_name}-#{key.to_s.parameterize}"
      data[param_key] = value if !data.key(param_key)
    end
  end

  def stimulus_data_attributes
    Hash.new
  end

end