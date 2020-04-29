class CollectionSelectInput < SimpleForm::Inputs::CollectionSelectInput
  include Inputs::Stimulusable

  def input_html_options
    options = super

    options[:data] ||= {}
    options[:data][:placeholder] = (options[:placeholder] || "choose an option...")

    options
  end

end