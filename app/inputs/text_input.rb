class TextInput < SimpleForm::Inputs::TextInput
  include StimulusableConcern

  def input_html_options
    options        = super
    options[:rows] = options[:rows] || 1
    options
  end

  def stimulus_controller_name
    "inputs--text-input"
  end

end