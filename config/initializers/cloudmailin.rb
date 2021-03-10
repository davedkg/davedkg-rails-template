require_relative Rails.root.join('lib', 'app_config.rb')

ActionMailer::Base.add_delivery_method :cloudmailin, Mail::SMTP,
  address: ENV['CLOUDMAILIN_HOST'],
  port: 587,
  domain: AppConfig.app_domain,
  user_name: ENV['CLOUDMAILIN_USERNAME'],
  password: ENV['CLOUDMAILIN_PASSWORD'],
  authentication: 'plain',
  enable_starttls_auto: true