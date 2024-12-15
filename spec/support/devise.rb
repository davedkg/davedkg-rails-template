RSpec.configure do |config|
  config.include Devise::Test::IntegrationHelpers, type: :feature
  config.include Devise::Test::IntegrationHelpers, type: :mailer
  config.include Devise::Test::IntegrationHelpers, type: :request

  # Hack: remove me
  config.before(:each, type: :request) do
    Rails.application.reload_routes_unless_loaded
  end

  # Hack: remove me
  config.before(:each, type: :feature) do
    Rails.application.reload_routes_unless_loaded
  end
end

# Hack: remove me
ActiveSupport.on_load(:action_mailer) do
  Rails.application.reload_routes_unless_loaded
end
