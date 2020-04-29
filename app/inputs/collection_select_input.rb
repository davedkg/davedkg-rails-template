class CollectionSelectInput < SimpleForm::Inputs::CollectionSelectInput
  include Inputs::Stimulusable

  def input_html_options
    options = super

    options[:data] ||= {}
    options[:data][:placeholder] = (options[:placeholder] || input_placeholder)

    options
  end

  private

  def input_placeholder
    if input_options[:multiple]
      "choose one or more options..."
    else
      "choose an option..."
    end
  end

  def stimulus_data_attributes
    attributes = super || Hash.new

    if input_options[:multiple]
      attributes[:multiple] = true
    end

    attributes
  end

end