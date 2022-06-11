# frozen_string_literal: true

module Pundit
  module Allowable
    module Authorization
      # :reek:ManualDispatch
      def allowed_attributes(record, action = action_name)
        policy = policy(record)
        method_name = if policy.respond_to?("allowed_attribute_values_for_#{action}")
                        "allowed_attribute_values_for_#{action}"
                      else
                        'allowed_attribute_values'
                      end
        permitted_attributes(record, action).allow(*policy.public_send(method_name))
      end
    end
  end
end
