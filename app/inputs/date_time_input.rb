class DateTimeInput < SimpleForm::Inputs::StringInput

  def input_html_options
    super.merge(autocomplete: "off", data: input_data_attribute)
         .merge(value: input_value) { |_, oldval, _| oldval }
  end

  private

  def input_data_attribute
    { controller: "date-time", "date-time-type" => input_type }
  end

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

end