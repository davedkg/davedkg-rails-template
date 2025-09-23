source "https://rubygems.org"

ruby "3.4.4"

gem "rails", "~> 8.0.1"
gem "propshaft", "~> 1.3.0"
gem "pg", "~> 1.6"
gem "puma", ">= 5.0"
gem "importmap-rails", "~> 2.2.2"
gem "turbo-rails", "~> 2.0.11"
gem "stimulus-rails", "~> 1.3.4"
gem "cssbundling-rails", "~> 1.4.2"
gem "jbuilder", "~> 2.14.1"
gem "tzinfo-data", platforms: %i[ windows jruby ]
gem "solid_cache", "~> 1.0.6"
gem "solid_queue", "~> 1.2.1"
gem "solid_cable", "~> 3.0.12"

gem "devise", "~> 4.9.4"
gem "devise_invitable", "~> 2.0.10"
gem "haml-rails", "~> 2.0"
gem "kaminari", "~> 1.2.2"
gem "loaf", "~> 0.10.0"
gem "paranoia", "~> 3.0.0"
gem "pundit", "~> 2.5.0"
gem "simple_form", "~> 5.3.1"
gem "turbo_power", "~> 0.7.0"

gem "bootsnap", require: false
gem "kamal", require: false
gem "thruster", require: false

group :development, :test do
  gem "bullet", "~> 8.0.5"
  gem "debug", platforms: %i[ mri windows ], require: "debug/prelude"
  gem "dotenv", "~> 3.1.8"
  gem "brakeman", "~> 7.1.0", require: false
  gem "factory_bot_rails", "~> 6.5.0"
  gem "fasterer", "~> 0.11.0", require: false
  gem "pry-byebug", "~> 3.11.0"
  gem "rspec-rails", "~> 8.0.2"
  gem "rubocop-rails-omakase", "~> 1.1.0", require: false
end

group :development do
  gem "foreman", "~> 0.90.0"
  gem "letter_opener_web", "~> 3.0"
  gem "web-console"
end

group :test do
  gem "faker", "~> 3.5.2"
  gem "pundit-matchers", "~> 4.0.0"
  gem "rspec_junit_formatter", "~> 0.6.0", require: false
  gem "simplecov", "~> 0.22.0", require: false

  gem "capybara"
  gem "selenium-webdriver"
end

group :production do
  gem "newrelic_rpm", "~> 9.20.0"
  gem "stackprof", "~> 0.2.26"
  gem "sentry-ruby", "~> 5.26.0"
  gem "sentry-rails", "~> 5.26.0"
end
