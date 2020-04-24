class CollectionSelectInput < SimpleForm::Inputs::CollectionSelectInput
  include StimulusableConcern

  def stimulus_controller_name
    "inputs--collection-select-input"
  end

end