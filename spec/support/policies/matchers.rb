# frozen_string_literal: true

module Pundit
  module Matchers
    RSpec::Matchers.define :permit_mass_assignment_of_exactly do |attributes|
      # Map single object argument to an array, if necessary
      attributes = attributes.is_a?(Array) ? attributes : [attributes]

      match do |policy|
        attr_method = 'permitted_attributes'
        attr_method += "_for_#{@action}" if defined? @action
        @policy_attributes = policy.send(attr_method) || []

        @policy_attributes == attributes
      end

      attr_reader :policy_attributes

      chain :for_action do |action|
        @action = action
      end

      failure_message do |policy|
        if defined? @action
          "#{policy.class} expected to permit the mass assignment of " \
            "exactly:\n#{attributes}\nwhen authorising the #{@action} " \
            "action, but instead permitted the mass assignment of:\n" \
            "#{policy_attributes}\nfor:\n" +
            policy.public_send(Pundit::Matchers.configuration.user_alias)
                  .inspect
        else
          "#{policy.class} expected to permit the mass assignment of " \
            "exactly:\n#{attributes}\nbut instead permitted the mass " \
            "assignment of:\n#{policy_attributes}\nfor:\n" +
            policy.public_send(Pundit::Matchers.configuration.user_alias)
                  .inspect
        end
      end

      failure_message_when_negated do |policy|
        if defined? @action
          "#{policy.class} expected not to permit the mass assignment of " \
            "exactly:\n#{attributes}\nwhen authorising the #{@action} " \
            "action, but permitted them instead, for:\n" +
            policy.public_send(Pundit::Matchers.configuration.user_alias)
                  .inspect
        else
          "#{policy.class} expected not to permit the mass assignment of " \
            "exactly:\n#{attributes}\nbut permitted them instead, for:\n" +
            policy.public_send(Pundit::Matchers.configuration.user_alias)
                  .inspect
        end
      end

      description do
        if defined? @action
          "permit mass assignment of exactly #{attributes} for the #{@action} action"
        else
          "permit mass assignment of exactly #{attributes}"
        end
      end
    end
  end
end
