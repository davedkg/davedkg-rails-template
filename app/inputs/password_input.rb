class PasswordInput < SimpleForm::Inputs::PasswordInput
  def input(wrapper_options = nil)
    input_html_classes << wrapper_options[:error_class] if has_errors?
    merged_input_options = merge_wrapper_options(input_html_options, wrapper_options)

    @builder.password_field(attribute_name, merged_input_options)
  end
end