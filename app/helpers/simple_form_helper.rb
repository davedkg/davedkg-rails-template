module SimpleFormHelper

  def simple_form_for(record, options = {}, &block)
    options[:data] ||= {}

    if options[:image_cropper]
      add_stimulus_controller(options[:data], "forms--image-cropper-form")
      add_stimulus_action(options[:data], "submit->forms--image-cropper-form#openFileChooser")
    else
      add_stimulus_controller(options[:data], "form")
    end

    super
  end

  private

  # TODO move me into a lib
  def add_stimulus_controller(data, controller)
    controllers = (data[:controller] || "").split(" ")

    controllers << controller if !controllers.include?(controller)

    data[:controller] = controllers.join(" ")
  end

  def add_stimulus_action(data, action)
    actions = (data[:action] || "").split(" ")

    actions << action if !actions.include?(action)

    data[:action] = actions.join(" ")
  end

end