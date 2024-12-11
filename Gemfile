# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.3.1'

gem 'importmap-rails', '~> 2.0.3'
gem 'jbuilder', '~> 2.13.0'
gem 'pg', '~> 1.5.9'
gem 'puma', '>= 5.0'
gem 'rails', '~> 7'
gem 'redis', '>= 5.3.0'
gem 'sprockets-rails', '~> 3.5.2'
gem 'stimulus-rails', '~> 1.3.4'
gem 'turbo-rails', '~> 2.0.11'

gem 'autoprefixer-rails', '~> 10.4.16.0'
gem 'dartsass-sprockets', '~> 3.1.0'
gem 'devise', '~> 4.9.4'
gem 'devise_invitable', '~> 2.0.9'
gem 'font-awesome-sass', '~> 6.5.2'
gem 'haml-rails', '~> 2.1.0'
gem 'jsbundling-rails', '~> 1.3.1'
gem 'kaminari', '~> 1.2.2'
gem 'loaf', '~> 0.10.0'
gem 'paranoia', '~> 3.0.0'
gem 'pundit', '~> 2.4.0'
gem 'sidekiq', '~> 7.3.6'
gem 'simple_form', '~> 5.3.1'

gem 'bootsnap', '~> 1.18.4', require: false
gem 'tzinfo-data', platforms: %i[windows jruby]

group :development, :test do
  gem 'brakeman', '~> 6.2.2'
  gem 'bullet', '~> 8.0.0'
  gem 'debug', '~> 1.9.2', platforms: %i[mri windows]
  gem 'dotenv', '~> 3.1.4'
  gem 'factory_bot_rails', '~> 6.4.4'
  gem 'fasterer', '~> 0.11.0'
  gem 'pry-byebug', '~> 3.10.1'
  gem 'reek', '~> 6.3.0'
  gem 'rspec-rails', '~> 7.1.0'
  gem 'rubocop-capybara', '~> 2.21.0'
  gem 'rubocop-factory_bot', '~> 2.26.1'
  gem 'rubocop-rails', '~> 2.27.0'
  gem 'rubocop-rspec', '~> 3.2.0'
  gem 'rubocop-rspec_rails', '~> 2.30.0'
  gem 'scss_lint', '~> 0.60.0', require: false
end

group :development do
  gem 'foreman', '~> 0.88.1'
  gem 'letter_opener_web', '~> 3.0.0'
  gem 'rack-mini-profiler', '~> 3.3.1'
  gem 'web-console', '~> 4.2.1'
end

group :test do
  gem 'faker', '~> 3.5.1'
  gem 'pundit-matchers', '~> 3.1.2'

  # Code Climate Code Coverage
  gem 'rspec_junit_formatter', '~> 0.6.0', require: false
  gem 'simplecov', '~> 0.22.0', require: false

  # Feature Tests
  gem 'capybara', '~> 3.40.0'
  gem 'selenium-webdriver', '~> 4.27.0'
end

group :production do
  gem 'mailgun-ruby', '~> 1.2.16'
  gem 'newrelic_rpm', '~> 9.16.1'
  gem 'rails_12factor', '~> 0.0.3'
  gem 'sentry-rails', '~> 5.22.0'
  gem 'sentry-ruby', '~> 5.22.0'
  gem 'sentry-sidekiq', '~>5.22.0'
end
