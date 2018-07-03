class DeviseMailer < Devise::Mailer  

  def reset_password_instructions(user_id, token, opts={})
    sendgrid_category "Devise - Reset Password Instructions"
    super(User.find(user_id), token, opts)
  end
  
  def invitation_instructions(user_id, token, opts={})
    sendgrid_category "Devise - Invitaton Instructions"
    super(User.find(user_id), token, opts)
  end
  
end