source "https://rubygems.org"

gem "rails", "~> 8.0.1"
gem "propshaft", "~> 1.1.0"
gem "pg", "~> 1.1"
gem "puma", ">= 5.0"
gem "importmap-rails", "~> 2.0.3"
gem "turbo-rails", "~> 2.0.11"
gem "stimulus-rails", "~> 1.3.4"
gem "cssbundling-rails", "~> 1.4.1"
gem "jbuilder", "~> 2.13.0"
gem "tzinfo-data", platforms: %i[ windows jruby ]
gem "solid_cache", "~> 1.0.6"
gem "solid_queue", "~> 1.1.0"
gem "solid_cable", "~> 3.0.4"

gem "paranoia", "~> 3.0.0"

gem "bootsnap", require: false
gem "kamal", require: false
gem "thruster", require: false

group :development, :test do
  gem "debug", platforms: %i[ mri windows ], require: "debug/prelude"
  gem "brakeman", "~> 6.2.2", require: false
  gem "factory_bot_rails", "~> 6.4.4"
  gem "pry-byebug", "~> 3.10.1"
  gem "reek", "~> 6.3.0", require: false
  gem "rspec-rails", "~> 7.0.0"
  gem "rubocop-rails-omakase", "~> 1.0.0", require: false
end

group :development do
  gem "web-console"
end

group :test do
  gem "faker", "~> 3.5.1"

  gem "capybara"
  gem "selenium-webdriver"
end
