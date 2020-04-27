module SimpleFormHelper

  def simple_form_for(record, options = {}, &block)
    options[:data] ||= {}

    add_stimulus_controller(options[:data])

    super
  end

  private

  def add_stimulus_controller(data)
    controllers    = (data[:controller] || "").split(" ")
    new_controller = stimululs_controller_name

    controllers << new_controller if !controllers.include?(new_controller)

    data[:controller] = controllers.join(" ")
  end

  def stimululs_controller_name
    "form"
  end

end