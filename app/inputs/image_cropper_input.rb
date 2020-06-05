# frozen_string_literal: true

class ImageCropperInput < SimpleForm::Inputs::FileInput
  def input_html_options
    options = super

    options[:accept] = 'image/*'

    add_stimulus_action((options[:data] ||= {}), 'change->forms--image-cropper-form#fileInputChanged')

    options
  end

  private

  def add_stimulus_action(data, action)
    actions = (data[:action] || '').split(' ')

    actions << action unless actions.include?(action)

    data[:action] = actions.join(' ')
  end
end
