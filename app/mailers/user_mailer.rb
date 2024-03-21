# frozen_string_literal: true

class UserMailer < Devise::Mailer
  def reset_password_instructions(user_id, token, opts = {})
    super(User.find(user_id), token, opts)
  end

  def unlock_instructions(user_id, token, opts = {})
    super(User.find(user_id), token, opts)
  end

  def invitation_instructions(user_id, token, opts = {})
    super(User.find(user_id), token, opts)
  end
end
