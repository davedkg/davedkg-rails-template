class UserMailerPreview < ActionMailer::Preview
  def reset_password_instructions
    UserMailer.reset_password_instructions(user_id, {})
  end

  def invitation_instructions
    UserMailer.invitation_instructions(user_id, 'user_raw_invitation_token', {})
  end

  private

  def user_id
    User.first.id
  end
end
