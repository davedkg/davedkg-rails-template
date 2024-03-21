source "https://rubygems.org"

ruby "3.3.0"

gem "rails", "~> 7.1.3", ">= 7.1.3.2"
gem "sprockets-rails", '~> 3.4.2'
gem "pg", "~> 1.1"
gem "puma", ">= 5.0"
gem "importmap-rails", '~> 2.0.1'
gem "turbo-rails", '~> 2.0.5'
gem "stimulus-rails", '~> 1.3.3'
gem "jbuilder", '~> 2.11.5'
gem "redis", ">= 4.0.1"
# gem "tzinfo-data", platforms: %i[ windows jruby ]
gem "bootsnap", '~> 1.18.3', require: false

group :development, :test do
  gem "debug", '~> 1.9.1', platforms: %i[ mri windows ]
end

group :development do
  gem "web-console", '~> 4.2.1'
  gem "rack-mini-profiler", '~> 3.3.1'

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

group :test do
  gem "capybara", '~> 3.40.0'
  gem "selenium-webdriver", '~> 4.18.1'
end
