require_relative Rails.root.join("lib", "app_config.rb")

PLATFORM_TITLE = ENV["PLATFORM_TITLE"] || "Template"
APP_DOMAIN = AppConfig.app_domain
EMAIL_DOMAIN = AppConfig.email_domain
