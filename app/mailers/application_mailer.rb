# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: "#{PLATFORM_TITLE}<noreply@#{EMAIL_DOMAIN}>"
  layout 'mailer'

  # def utm_params
  #   {
  #     utm_medium: :email,
  #     utm_source: PLATFORM_TITLE.downcase.parameterize,
  #     utm_campaign: "#{self.class.to_s.downcase.gsub("mailer", "")}_#{action_name}"
  #   }
  # end
end
