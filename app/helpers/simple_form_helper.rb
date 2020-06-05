# frozen_string_literal: true

module SimpleFormHelper
  include Stimulusable

  def simple_form_for(record, options = {}, &block)
    data = options[:data] || {}

    if options[:image_cropper]
      add_stimulus_controller(data, 'forms--image-cropper-form')
      add_stimulus_action(data, 'submit->forms--image-cropper-form#openFileChooser')
    else
      add_stimulus_controller(data, 'form')
    end

    options[:data] = data

    super
  end
end
