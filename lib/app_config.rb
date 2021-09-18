# frozen_string_literal: true

# :reek:DuplicateMethodCall
class AppConfig
  def self.email_domain
    ENV['MAILGUN_DOMAIN'] || ENV['EMAIL_DOMAIN'] || AppConfig.app_domain
  end

  def self.app_domain
    if ENV['APP_DOMAIN']
      ENV['APP_DOMAIN']
    elsif ENV['HEROKU_APP_NAME']
      "#{ENV['HEROKU_APP_NAME']}.herokuapp.com"
    else
      'localhost:3000'
    end
  end
end
