# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: "#{PLATFORM_TITLE}<noreply@#{ENV['MAILGUN_DOMAIN'] || 'example.com'}>"
  layout 'mailer'

  private

  def mail(headers, &block)
    # self.default_url_options = default_url_options.merge(utm_params)
    super
  end

  # def utm_params
  #   {
  #     utm_medium: :email,
  #     utm_source: PLATFORM_TITLE.downcase.parameterize,
  #     utm_campaign: "#{self.class.to_s.downcase.gsub("mailer", "")}_#{action_name}"
  #   }
  # end
end
