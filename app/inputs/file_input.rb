class FileInput < SimpleForm::Inputs::FileInput
  include StimulusableConcern

  def input_html_options
    options = super

    if (input_options[:image_cropper])
      options[:data] ||= {}

      controller = "image-cropper"
      action     = "change->#{controller}#inputChanged"

      add_stimulus_controller(options[:data], controller)
      add_stimulus_action(options[:data], action)

      options[:accept] = "image/*"
    end

    options
  end

end