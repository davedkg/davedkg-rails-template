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

gem "autoprefixer-rails", '~> 9.0.0'
gem "breadcrumbs_on_rails", "~> 3.0.1"
gem 'chosen-rails', '~> 1.8.3'
gem 'coffee-rails', '~> 4.2.2'
gem "figaro", '~> 1.1.1'
gem 'devise', '~> 4.4.3'
gem 'devise_invitable', '~> 1.7.4'
gem 'devise_invalidatable', '~>  0.1.0'
gem 'devise_zxcvbn', '~> 4.4.1'
gem "font-awesome-rails", "~> 4.7.0.4"
gem 'grape', '~> 1.0.3'
gem 'grape-swagger', '~> 0.30.1'
gem 'grape-swagger-rails', '~> 0.3.0'
gem "haml-rails", "~> 1.0"
gem 'mongoid', '~> 6.1.0'
gem 'mongoid_paranoia', '~> 0.3.0'
gem 'popper_js', '~> 1.12.9'
gem 'resque', "~> 1.27.0"
gem 'sendgrid', '~> 1.2.4'
gem 'simple_form', '~> 3.5.0'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails', '~> 3.7'
  gem 'factory_bot_rails', '~> 4.10.0'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'foreman', '~> 0.64.0'
  gem 'guard-rspec', '~> 4.7.3', require: false
  gem 'guard-livereload', '~> 2.5', require: false
  gem 'pry-rails', '~> 0.3.6'
end

group :test do
  gem 'faker', '~> 1.9.1'
  gem 'database_cleaner', '~> 1.7.0'
  gem 'rspec_junit_formatter', '~> 0.4.1'
  gem 'simplecov', '~> 0.16.1', require: false
end

group :production do
  gem 'dalli', '~> 2.7.6'
  gem 'newrelic_rpm', '~> 5.2.0.345'
  gem 'rails_12factor', '~> 0.0.3'
  gem "sentry-raven", '~> 2.7.4'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
