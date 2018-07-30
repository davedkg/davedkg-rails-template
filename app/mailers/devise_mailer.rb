class DeviseMailer < Devise::Mailer  
  
  def confirmation_instructions(user_id, token, opts={})
    sendgrid_category "Devise - Confirmation Instructions"
    mail = super(User.find(user_id), token, opts)
    mail.subject = "[" + APP_TITLE + "] Confirm your Email"
    mail
  end
  
  def invitation_instructions(user_id, token, opts={})
    sendgrid_category "Devise - Invitaton Instructions"
    mail = super(User.find(user_id), token, opts)
    mail.subject = "[" + APP_TITLE + "] Invitation Instructions"
    mail
  end

  def reset_password_instructions(user_id, token, opts={})
    sendgrid_category "Devise - Reset Password Instructions"
    mail = super(User.find(user_id), token, opts)
    mail.subject = "[" + APP_TITLE + "] Change your Password"
    mail
  end
  
end