# frozen_string_literal: true
# Use this setup block to configure all options available in SimpleForm.
SimpleForm.setup do |config|
  config.error_notification_class = 'alert alert-danger'
  config.button_class = 'btn btn-default'
  config.boolean_label_class = nil

  config.wrappers :centered_form, tag: 'div', class: 'form-group form-group--float form-group--centered' do |b|
     b.use :html5
     b.use :placeholder
     b.use :input, class: 'form-control', error_class: 'is-invalid'
     b.use :label
     b.use :error, wrap_with: { tag: 'div', class: 'invalid-feedback' }
    
     # FIXME this is a hack
     b.wrapper tag: 'i', class: 'form-group__bar' do
     end
   end
  
  config.wrappers :horizontal_form, tag: 'div', class: 'form-group' do |b|
     b.use :html5
     b.use :placeholder
     b.use :label
     b.use :input, class: 'form-control', error_class: 'is-invalid'
     b.use :error, wrap_with: { tag: 'div', class: 'invalid-feedback' }
    
     # FIXME this is a hack
     b.wrapper tag: 'i', class: 'form-group__bar' do
     end
   end
  
   config.wrappers :horizontal_boolean, tag: 'div', class: 'form-group' do |b|
     b.use :html5
     b.optional :readonly
     b.use :label
    
     b.wrapper tag: 'div', class: 'toggle-switch' do |ba|
       ba.use :input, class: 'toggle-switch__checkbox', type: :checkbox, wrapper: nil
    
       # FIXME this is a hack
       ba.wrapper tag: 'i', class: 'toggle-switch__helper' do
       end
     end
   end

  # config.wrappers :vertical_form, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
  #   b.use :html5
  #   b.use :placeholder
  #   b.optional :maxlength
  #   b.optional :minlength
  #   b.optional :pattern
  #   b.optional :min_max
  #   b.optional :readonly
  #   b.use :label, class: 'control-label'
  #
  #   b.use :input, class: 'form-control'
  #   b.use :error, wrap_with: { tag: 'span', class: 'help-block' }
  #   b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  # end
  #
  # config.wrappers :vertical_file_input, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
  #   b.use :html5
  #   b.use :placeholder
  #   b.optional :maxlength
  #   b.optional :minlength
  #   b.optional :readonly
  #   b.use :label, class: 'control-label'
  #
  #   b.use :input
  #   b.use :error, wrap_with: { tag: 'span', class: 'help-block' }
  #   b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  # end
  #
  # config.wrappers :vertical_boolean, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
  #   b.use :html5
  #   b.optional :readonly
  #
  #   b.wrapper tag: 'div', class: 'checkbox' do |ba|
  #     ba.use :label_input
  #   end
  #
  #   b.use :error, wrap_with: { tag: 'span', class: 'help-block' }
  #   b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  # end
  #
  # config.wrappers :vertical_radio_and_checkboxes, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
  #   b.use :html5
  #   b.optional :readonly
  #   b.use :label, class: 'control-label'
  #   b.use :input
  #   b.use :error, wrap_with: { tag: 'span', class: 'help-block' }
  #   b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  # end
  #
  # config.wrappers :horizontal_form, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
  #   b.use :html5
  #   b.use :placeholder
  #   b.optional :maxlength
  #   b.optional :minlength
  #   b.optional :pattern
  #   b.optional :min_max
  #   b.optional :readonly
  #   b.use :label, class: 'col-sm-3 control-label'
  #
  #   b.wrapper tag: 'div', class: 'col-sm-9' do |ba|
  #     ba.use :input, class: 'form-control'
  #     ba.use :error, wrap_with: { tag: 'span', class: 'help-block' }
  #     ba.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  #   end
  # end
  #
  # config.wrappers :horizontal_file_input, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
  #   b.use :html5
  #   b.use :placeholder
  #   b.optional :maxlength
  #   b.optional :minlength
  #   b.optional :readonly
  #   b.use :label, class: 'col-sm-3 control-label'
  #
  #   b.wrapper tag: 'div', class: 'col-sm-9' do |ba|
  #     ba.use :input
  #     ba.use :error, wrap_with: { tag: 'span', class: 'help-block' }
  #     ba.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  #   end
  # end
  #
  # config.wrappers :horizontal_boolean, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
  #   b.use :html5
  #   b.optional :readonly
  #
  #   b.wrapper tag: 'div', class: 'col-sm-offset-3 col-sm-9' do |wr|
  #     wr.wrapper tag: 'div', class: 'checkbox' do |ba|
  #       ba.use :label_input
  #     end
  #
  #     wr.use :error, wrap_with: { tag: 'span', class: 'help-block' }
  #     wr.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  #   end
  # end
  #
  # config.wrappers :horizontal_radio_and_checkboxes, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
  #   b.use :html5
  #   b.optional :readonly
  #
  #   b.use :label, class: 'col-sm-3 control-label'
  #
  #   b.wrapper tag: 'div', class: 'col-sm-9' do |ba|
  #     ba.use :input
  #     ba.use :error, wrap_with: { tag: 'span', class: 'help-block' }
  #     ba.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  #   end
  # end
  #
  # config.wrappers :inline_form, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
  #   b.use :html5
  #   b.use :placeholder
  #   b.optional :maxlength
  #   b.optional :minlength
  #   b.optional :pattern
  #   b.optional :min_max
  #   b.optional :readonly
  #   b.use :label, class: 'sr-only'
  #
  #   b.use :input, class: 'form-control'
  #   b.use :error, wrap_with: { tag: 'span', class: 'help-block' }
  #   b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  # end
  #
  # config.wrappers :multi_select, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
  #   b.use :html5
  #   b.optional :readonly
  #   b.use :label, class: 'control-label'
  #   b.wrapper tag: 'div', class: 'form-inline' do |ba|
  #     ba.use :input, class: 'form-control'
  #     ba.use :error, wrap_with: { tag: 'span', class: 'help-block' }
  #     ba.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  #   end
  # end
  
  # Wrappers for forms and inputs using the Bootstrap toolkit.
  # Check the Bootstrap docs (http://getbootstrap.com)
  # to learn about the different styles for forms and inputs,
  # buttons and other elements.
  config.default_wrapper = :horizontal_form
  config.wrapper_mappings = {
    # check_boxes: :vertical_radio_and_checkboxes,
    # radio_buttons: :vertical_radio_and_checkboxes,
    # file: :vertical_file_input,
    boolean: :horizontal_boolean,
    # datetime: :multi_select,
    # date: :multi_select,
    # time: :multi_select
  }
end
