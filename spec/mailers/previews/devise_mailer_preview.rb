class DeviseMailerPreview < ActionMailer::Preview
  
  def confirmation_instructions
    DeviseMailer.confirmation_instructions(user_id, token, {})
  end
  
  def invitation_instructions
    DeviseMailer.invitation_instructions(user_id, token, {})
  end

  def reset_password_instructions
    DeviseMailer.reset_password_instructions(user_id, token, {})
  end

  private

  def user_id
    User.first.id
  end
  
  def token
    SecureRandom.uuid
  end
  
end