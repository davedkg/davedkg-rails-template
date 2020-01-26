source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.4'

gem 'dotenv-rails', "~> 2.7.5", groups: [:development, :test]

gem 'rails', '~> 6.0.2', '>= 6.0.2.1'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.1'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'

gem "actionview-component", "~> 1.8.1"
gem "autoprefixer-rails", "~> 6.7.2"
gem 'devise', "~> 4.7.1"
gem 'devise_invitable', '~> 2.0.0'
gem 'gravatarify', '~> 3.0.0'
gem "haml-rails", "~> 2.0"
gem 'kaminari', "~> 1.1.1"
gem "loaf", "~> 0.9.0"
gem "paranoia", "~> 2.4.2"
gem 'resque', "~> 2.0.0"
gem 'simple_form', "~> 5.0.1"
gem 'turbolinks-animate', "~> 2.0.1"

gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  gem 'factory_bot_rails', "~> 5.1.1"
  gem "pry-byebug", "~> 3.8.0"
  gem 'rspec-rails', '~> 3.9'
end

group :development do
  gem 'letter_opener_web', '~> 1.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem "database_cleaner", "~> 1.7.0"
  gem "faker", "~> 2.10.1"
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
