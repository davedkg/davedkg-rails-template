class ApplicationMailer < ActionMailer::Base
  include SendGrid
  
  default from: 'no-reply@example.com'
  layout 'mailer'
  
end
