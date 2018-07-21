# Used to force emails to be delivered now for testing purposes
class ActionMailer::MessageDelivery
  def deliver_later
    deliver_now
  end
end