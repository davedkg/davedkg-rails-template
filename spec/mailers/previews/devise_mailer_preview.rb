class DeviseMailerPreview < ActionMailer::Preview

  def reset_password_instructions
    DeviseMailer.reset_password_instructions(user_id, {})
  end

  def confirmation_instructions
    DeviseMailer.confirmation_instructions(user_id, {})
  end

  def unlock_instructions
    DeviseMailer.unlock_instructions(user_id, {})
  end

  def invitation_instructions
    DeviseMailer.invitation_instructions(user_id, "user_raw_invitation_token", {})
  end

  private

  def user_id
    User.first.id
  end

end