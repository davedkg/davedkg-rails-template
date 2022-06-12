# frozen_string_literal: true

module Pundit
  module StrongParameterValues
    module Authorization
      # :reek:ManualDispatch
      def permitted_attributes_and_values(record, action = action_name)
        policy = policy(record)
        method_name = if policy.respond_to?("permitted_attribute_values_for_#{action}")
                        "permitted_attribute_values_for_#{action}"
                      else
                        'permitted_attribute_values'
                      end
        permitted_attributes(record, action).allow(*policy.public_send(method_name))
      end
    end
  end
end
