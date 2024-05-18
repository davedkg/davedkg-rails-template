# frozen_string_literal: true

require 'sidekiq/web'

database_url = ENV.fetch('REDIS_URL', nil)

Sidekiq.configure_server do |config|
  config.redis = { url: database_url }
end

Sidekiq.configure_client do |config|
  config.redis = { url: database_url }
end