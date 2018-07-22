class PasswordInput < SimpleForm::Inputs::PasswordInput

  def input(wrapper_options = nil)
    input_html_classes << wrapper_options[:error_class] if has_errors?
    super
  end
  
end