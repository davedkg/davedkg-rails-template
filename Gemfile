# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.3.1'

gem 'importmap-rails', '~> 2.0.1'
gem 'jbuilder', '~> 2.11.5'
gem 'pg', '~> 1.1'
gem 'puma', '>= 5.0'
gem 'rails', '~> 7.1.3', '>= 7.1.3.2'
gem 'redis', '>= 4.0.1'
gem 'sprockets-rails', '~> 3.4.2'
gem 'stimulus-rails', '~> 1.3.3'
gem 'turbo-rails', '~> 2.0.5'

gem 'autoprefixer-rails', '~> 10.4.16.0'
gem 'dartsass-sprockets', '~> 3.1.0'
gem 'devise', '~> 4.9.4'
gem 'devise_invitable', '~> 2.0.0'
gem 'font-awesome-sass', '~> 6.5.2'
gem 'haml-rails', '~> 2.0'
gem 'kaminari', '~> 1.2.2'
gem 'paranoia', '~> 2.6.3'
gem 'pundit', '~> 2.3.1'
gem 'sidekiq', '~> 7.2'
gem 'simple_form', '~> 5.3.0'

gem 'bootsnap', '~> 1.18.3', require: false
gem 'tzinfo-data', platforms: %i[windows jruby]

group :development, :test do
  gem 'brakeman', '~> 6.1.2'
  gem 'bullet', '~> 7.1.6'
  gem 'debug', '~> 1.9.2', platforms: %i[mri windows]
  gem 'dotenv', '~> 3.1.2'
  gem 'factory_bot_rails', '~> 6.4.3'
  gem 'fasterer', '~> 0.11.0'
  gem 'pry-byebug', '~> 3.10.1'
  gem 'reek', '~> 6.3.0'
  gem 'rspec-rails', '~> 6.1.2'
  gem 'rubocop-rails', '~> 2.24.1'
  gem 'rubocop-rspec', '~> 2.29.2'
end

group :development do
  gem 'foreman', '~> 0.88.1'
  gem 'letter_opener_web', '~> 3.0.0'
  gem 'rack-mini-profiler', '~> 3.3.1'
  gem 'web-console', '~> 4.2.1'
end

group :test do
  gem 'faker', '~> 3.3.1'
  gem 'pundit-matchers', '~> 3.1.2'

  # Code Climate Code Coverage
  gem 'rspec_junit_formatter', '~> 0.6.0', require: false
  gem 'simplecov', '~> 0.22.0', require: false

  # Feature Tests
  gem 'capybara', '~> 3.40.0'
  gem 'selenium-webdriver', '~> 4.19.0'
end
