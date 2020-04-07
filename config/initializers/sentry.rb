if ENV['SENTRY_DSN'] && defined?(Raven)
  Raven.configure do |config|
    config.sanitize_fields = Rails.application.config.filter_parameters.map(&:to_s)
    config.environments    = ['production']
    config.dsn             = ENV['SENTRY_DSN']
    config.release         = ENV['HEROKU_RELEASE_VERSION'] if ENV['HEROKU_RELEASE_VERSION']
  end
end