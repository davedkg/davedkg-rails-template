class TextInput < SimpleForm::Inputs::TextInput
  include StimulusableConcern

  def input_html_options
    options        = super
    options[:rows] = options[:rows] || 1
    options
  end

end