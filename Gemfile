# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.8'

gem 'dotenv-rails', '~> 2.7.5', groups: %i[development test]

gem 'jbuilder', '~> 2.7'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.3'
gem 'rails', '~> 6.1.0'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 5.4.3'

gem 'active_storage_validations', '~> 0.8.8'
gem 'autoprefixer-rails', '~> 6.7.2'
gem 'devise', '~> 4.7.1'
gem 'devise_invitable', '~> 2.0.0'
gem 'groupdate', '~> 5.0.0'
gem 'haml-rails', '~> 2.0'
gem 'image_processing', '~> 1.12.2'
gem 'kaminari', '~> 1.2.1'
gem 'loaf', '~> 0.10.0'
gem 'mailgun-ruby', '~>1.1.6'
gem 'mini_magick', '~> 4.10.1'
gem 'paranoia', '~> 2.4.2'
gem 'pundit', '~> 2.1.0'
gem 'sidekiq', '~> 6.4.0'
gem 'simple_form', '~> 5.0.1'
gem 'turbo-rails', '~> 0.7.14'

gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  gem 'action-cable-testing', '~> 0.6.1'
  gem 'brakeman', '~> 5.1.1'
  gem 'eslintrb', '~> 2.1.0'
  gem 'factory_bot_rails', '~> 5.1.1'
  gem 'fasterer', '~> 0.9.0'
  gem 'pry-byebug', '~> 3.9.0'
  gem 'reek', '~> 6.0.1'
  gem 'rspec-rails', '~> 4.0'
  gem 'rubocop', '~> 0.90.0' # FIXME: remove me when rubocop is fixed
  gem 'rubocop-rails', '~> 2.5.2'
  gem 'rubocop-rspec', '~> 1.39.0'
  gem 'scss_lint', '~> 0.59.0'
end

group :development do
  gem 'foreman', '~> 0.87.1', require: false
  gem 'guard-livereload', '~> 2.5', require: false
  gem 'letter_opener_web', '~> 1.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'rack-livereload', '~> 0.3.17'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'database_cleaner', '~> 1.7.0'
  gem 'faker', '~> 2.10.1'
  gem 'pundit-matchers', '~> 1.6.0'
  gem 'rspec_junit_formatter', '~> 0.4.1'
  gem 'simplecov', '~> 0.17.1', require: false

  # Feature Tests
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

group :production do
  gem 'newrelic_rpm', '~> 7.1.0'
  gem 'rails_12factor', '~> 0.0.3'
  gem 'sentry-rails', '~> 4.6.4'
  gem 'sentry-ruby', '~> 4.6.4'
  gem 'sentry-sidekiq', '~> 4.6.4'
end

# gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
