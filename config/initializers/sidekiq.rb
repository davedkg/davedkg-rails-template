require 'sidekiq/web'

database_url = ENV['REDIS_URL']

Sidekiq.configure_server do |config|
  config.redis = { url: database_url }
end

Sidekiq.configure_client do |config|
  config.redis = { url: database_url }
end