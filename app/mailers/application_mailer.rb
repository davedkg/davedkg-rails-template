class ApplicationMailer < ActionMailer::Base
  include SendGrid

  default from: "No Reply<no-reply@example.com>"
  layout 'mailer'

end
