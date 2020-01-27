class ApplicationMailer < ActionMailer::Base
  include SendGrid

  default from: 'from@example.com'
  layout 'mailer'

  private

  def mail(headers, &block)
    sendgrid_category "#{self.class} - #{action_name.humanize}"
    self.default_url_options = default_url_options.merge(utm_params)
    super
  end

  def utm_params
    {
      utm_medium: :email,
      utm_source: PLATFORM_TITLE.downcase.parameterize,
      utm_campaign: "#{self.class.to_s.downcase.gsub("mailer", "")}_#{action_name}"
    }
  end
end
