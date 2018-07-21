class ApplicationMailer < ActionMailer::Base
  include SendGrid
  
  default from: FROM_EMAIL_ADDRESS
  layout 'mailer'
  
end
