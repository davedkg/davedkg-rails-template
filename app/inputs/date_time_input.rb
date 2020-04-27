class DateTimeInput < SimpleForm::Inputs::StringInput
  include StimulusableConcern

  def input_html_options
    super.merge(autocomplete: :off, placeholder: input_placeholder)
  end

  private

  def input_value
    case input_type
    when :date
      object&.send(attribute_name)&.strftime "%Y-%m-%d"
    when :time
      object&.send(attribute_name)&.strftime "%H:%M"
    else
      object&.send(attribute_name)&.strftime "%Y-%m-%d %H:%M"
    end
  end

  def input_placeholder
    case input_type
    when :date
      "choose a date..."
    when :time
      "choose a time..."
    else
      "choose a date and time..."
    end
  end

  def stimulus_data_attributes
    { type: input_type }
  end

end