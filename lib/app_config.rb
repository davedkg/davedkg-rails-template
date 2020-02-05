class AppConfig

  def self.app_domain
    ENV['APP_DOMAIN'] ? ENV['APP_DOMAIN'] : ( ENV['HEROKU_APP_NAME'] ? "#{ENV['HEROKU_APP_NAME']}.herokuapp.com" : "localhost:3000")
  end

end