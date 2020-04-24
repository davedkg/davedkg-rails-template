module StimulusableConcern
  extend ActiveSupport::Concern

  def input_html_options
    options = super

    add_stimulus_options(options)

    options
  end

  private

  def stimululs_controller_name
    @stimululs_controller_name ||= "inputs--#{self.class.to_s.titleize.parameterize}"
  end

  def add_stimulus_options(options)
    options[:data] ||= {}

    add_stimulus_controller(options[:data])
    add_stimulus_data_attributes(options[:data])
  end

  def add_stimulus_controller(data)
    controllers = (data[:controller] || "").split(" ")

    controllers << stimululs_controller_name if !controllers.include?(stimululs_controller_name)

    data[:controller] = controllers.join(" ")
  end

  def add_stimulus_data_attributes(data)
    stimulus_data_attributes.each do |key, value|
      param_key       = "#{stimululs_controller_name}-#{key.to_s.parameterize}"
      data[param_key] = value if !data.key(param_key)
    end
  end

  def stimulus_data_attributes
    Hash.new
  end

end