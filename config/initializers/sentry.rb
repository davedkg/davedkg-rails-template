# frozen_string_literal: true

if ENV['SENTRY_DSN'] && defined?(Sentry)
  Sentry.init do |config|
    config.dsn                = ENV['SENTRY_DSN']
    config.breadcrumbs_logger = [:active_support_logger, :http_logger]
    config.release            = ENV['HEROKU_RELEASE_VERSION'] if ENV['HEROKU_RELEASE_VERSION']

    # Filter Params
    filter = ActiveSupport::ParameterFilter.new(Rails.application.config.filter_parameters)
    config.before_send = lambda do |event, hint|
      filter.filter(event.to_hash)
    end
  end
end