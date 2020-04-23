class FileInput < SimpleForm::Inputs::FileInput

  def input_html_options
    options          = super
    options[:data] ||= {}

    if options[:data][:controller]
      unless options[:data][:controller].include?(" file")
        options[:data][:controller] = "#{options[:data][:controller]} file"
      end
    else
      options[:data][:controller] = "file"
    end

    options
  end

end