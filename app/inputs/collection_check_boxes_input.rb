# frozen_string_literal: true

class CollectionCheckBoxesInput < SimpleForm::Inputs::CollectionCheckBoxesInput
  protected

  def apply_default_collection_options!(options)
    options[:item_wrapper_class] = item_wrapper_class
    options[:item_label_class]   = item_label_class

    super(options)
  end

  def item_wrapper_class
    'checkbox'
  end

  def item_label_class
    'checkbox__label'
  end
end
