# frozen_string_literal: true

require 'sidekiq/web'

database_url = ENV.fetch('REDIS_URL') { 'redis://127.0.0.1:6379/0' }

Sidekiq.configure_server do |config|
  config.redis = { url: database_url }
end

Sidekiq.configure_client do |config|
  config.redis = { url: database_url }
end