class TextInput < SimpleForm::Inputs::TextInput

  def input_html_options
    options          = super
    options[:rows]   = options[:rows] || 1
    options[:data] ||= {}

    if options[:data][:controller]
      unless options[:data][:controller].include?(" textarea")
        options[:data][:controller] = "#{options[:data][:controller]} textarea"
      end
    else
      options[:data][:controller] = "textarea"
    end

    options
  end

end