# frozen_string_literal: true

# Used to force emails to be delivered now for testing purposes
module ActionMailer
  class MessageDelivery
    def deliver_later
      deliver_now
    end
  end
end
