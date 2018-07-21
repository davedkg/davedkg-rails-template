class ApplicationMailer < ActionMailer::Base
  include SendGrid
  
  default from: "No Reply<no-reply@#{EMAIL_DOMAIN}>"
  layout 'mailer'
  
end
