# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: "#{PLATFORM_TITLE}<noreply@#{EMAIL_DOMAIN}>"
  layout 'mailer'
end
