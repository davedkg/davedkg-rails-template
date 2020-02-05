PLATFORM_TITLE = "DKG Template"
APP_DOMAIN     = Rails.env.production? ? (ENV['APP_DOMAIN'] || "#{ENV['HEROKU_APP_NAME']}.herokuapp.com") : "localhost:3000"