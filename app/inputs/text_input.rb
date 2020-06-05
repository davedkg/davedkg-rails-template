# frozen_string_literal: true

class TextInput < SimpleForm::Inputs::TextInput
  include Inputs::Stimulusable

  def input_html_options
    options        = super
    options[:rows] = options[:rows] || 1
    options
  end
end
