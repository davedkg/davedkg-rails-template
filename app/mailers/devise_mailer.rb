class DeviseMailer < Devise::Mailer

  def reset_password_instructions(user_id, token, opts = {})
    super(User.find(user_id), token, opts)
  end

  def confirmation_instructions(user_id, token, opts = {})
    super(User.find(user_id), token, opts)
  end

  def unlock_instructions(user_id, token, opts={})
    super(User.find(user_id), token, opts)
  end

end