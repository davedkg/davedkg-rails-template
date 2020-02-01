class AlertComponentPreview < ActionView::Component::Preview

  def alert_success
    render(AlertComponent, message: message, type: :success)
  end

  def alert_danger
    render(AlertComponent, message: message, type: :danger)
  end

  private

  def message
    Faker::Lorem.sentence
  end

end