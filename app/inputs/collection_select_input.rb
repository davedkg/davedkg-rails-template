# frozen_string_literal: true

class CollectionSelectInput < SimpleForm::Inputs::CollectionSelectInput
  include Inputs::Stimulusable

  def input_html_options
    options = super

    data               = options[:data] || {}
    data[:placeholder] = (options[:placeholder] || input_placeholder)
    options[:data]     = data

    options
  end

  private

  def input_placeholder
    if input_options[:multiple]
      'choose one or more options...'
    else
      'choose an option...'
    end
  end

  def stimulus_data_attributes
    attributes = super || {}

    attributes[:multiple] = true if input_options[:multiple]

    attributes
  end
end
