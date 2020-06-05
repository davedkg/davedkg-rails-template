# frozen_string_literal: true

module SimpleFormHelper
  include Stimulusable

  def simple_form_for(record, options = {}, &block)
    options[:data] ||= {}

    if options[:image_cropper]
      add_stimulus_controller(options[:data], 'forms--image-cropper-form')
      add_stimulus_action(options[:data], 'submit->forms--image-cropper-form#openFileChooser')
    else
      add_stimulus_controller(options[:data], 'form')
    end

    super
  end
end
