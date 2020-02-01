# davedkg-rails-template
[![Maintainability](https://api.codeclimate.com/v1/badges/7703a00ebe9661c4685c/maintainability)](https://codeclimate.com/github/davedkg/davedkg-rails-template/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7703a00ebe9661c4685c/test_coverage)](https://codeclimate.com/github/davedkg/davedkg-rails-template/test_coverage)
[![CircleCI](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/master.svg?style=shield)](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/master)

## Local Setup

```bash
$ brew install postgresql redis yarn
$ rvm install 2.6.4
$ bundle && yarn
$ gem install foreman
$ cp .env.sample .env
$ bundle exec rake db:setup db:seed
$ rspec
$ foreman start -f Procfile.dev
$ open http://localhost:3000/
```

#### Create First User

```bash
$ rails c
$ <pry> User.invite!(email: "bob@bob.com")
$ <pry> exit
$ tail -200 log/development.log
```

And then find the accept invitation link in the log.

#### Development Rake Tasks

| Task | Description |
| --- | --- |
| development:reset | Reset development and test databases, run development:seed, clear out tmp files |
| development:seed | Create seed data for development enviornment |

#### Development Users

| Email | Password |
| --- | --- |
| user@example.com | users_password123 |
| admin@example.com | admins_password123 |

#### Rebrand App

| File | Change |
| --- | --- |
| .circleci/config.yml | database name |
| app/mailers/application_mailer.rb | default from: 'email address' |
| config/enviornments/production.rb | ActionMailer::Base.smtp_settings[:domain] |
| config/initializers/constants.rb | PLATFORM_NAME |
| config/initializers/devise.rb | config.mailer_sender |
| config/application.rb | Rails::Application module name |
| config/database.yml | database names |
| .ruby-gemset | gemset name |
| README.md | project title |
| app.json | name, description, reposiitory |

## Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

#### Configuring

```bash
$ heroku labs:enable runtime-dyno-metadata # Sentry Release Detection
$ heroku config:set APP_DOMAIN app-name.herokuapp.com
```

#### Acceptance Rake Tasks

| Task | Description |
| --- | --- |
| acceptance:setup | Setup acceptance enviornment (see app.json) |
| acceptance:teardown | Tear down acceptance enviornment (see app.json) |