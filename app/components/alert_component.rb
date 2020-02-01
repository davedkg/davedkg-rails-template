class AlertComponent < ActionView::Component::Base

  validates :type, presence: true, inclusion: { in: [ :success, :danger ] }

  def initialize(message:, type:)
    @message = message
    @type    = type
  end

  attr_reader :message, :type

  def render?
    !@message.blank?
  end

end
