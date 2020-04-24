class FileInput < SimpleForm::Inputs::FileInput
  include StimulusableConcern

  def stimulus_controller_name
    "inputs--file-input"
  end

end