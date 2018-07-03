source 'https://rubygems.org'

ruby "2.5.1"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.6'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

gem "breadcrumbs_on_rails", "~> 3.0.1"
gem 'capybara', '~> 2.13'
gem "figaro", '~> 1.1.1'
gem "font-awesome-rails", "~> 4.7.0.4"
gem 'devise', '~> 4.4.3'
gem 'devise_invitable', '~> 1.7.4'
gem "haml-rails", "~> 1.0"
gem 'launchy', '~> 2.4.3'
gem 'mongoid', '~> 6.1.0'
gem 'mongoid_paranoia', '~> 0.3.0'
gem 'poltergeist', '~> 1.18.0'
gem 'popper_js', '~> 1.12.9'
gem 'resque', "~> 1.27.0"
gem 'sendgrid', '~> 1.2.4'
gem 'simple_form', '~> 3.5.0'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails', '~> 3.7'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'foreman'
  gem 'mailcatcher'
end

group :production do
  gem 'newrelic_rpm'
  gem 'rails_12factor'
  gem "sentry-raven"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
