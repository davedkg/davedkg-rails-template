# frozen_string_literal: true

require 'sidekiq/web'

database_url = ENV['REDIS_URL']

Sidekiq.configure_server do |config|
  config.redis = { url: database_url }

  # config.server_middleware do |chain|
  #   chain.add Sidekiq::Middleware::Server::SentryErrorLogger if defined?(Raven)
  # end
end

Sidekiq.configure_client do |config|
  config.redis = { url: database_url }
end
