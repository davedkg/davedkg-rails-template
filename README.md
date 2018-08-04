# davedkg-rails-template
[![Maintainability](https://api.codeclimate.com/v1/badges/84c96cc264dcf00b0449/maintainability)](https://codeclimate.com/github/davedkg/davedkg-rails-template/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/84c96cc264dcf00b0449/test_coverage)](https://codeclimate.com/github/davedkg/davedkg-rails-template/test_coverage)
[![CircleCI](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/master.svg?style=shield)](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/master)
[![Inch CI](https://inch-ci.org/github/davedkg/davedkg-rails-template.svg?branch=master)](https://inch-ci.org/github/davedkg/davedkg-rails-template/suggestions?branch=master)

## Local Setup

```bash
$ brew install mongodb redis npm
$ rvm install 2.5.1 
$ bundle && yarn
$ cp config/application.example.yml config/application.yml
$ rspec
$ foreman start -f Procfile.dev
$ open http://localhost:3000/
```

#### Live Reload (optional)

http://livereload.com/extensions/#installing-sections

## Heroku Setup

#### Provisioning

```bash
$ heroku create <app-name>
$ heroku addons:create mongolab
$ heroku addons:create heroku-redis:hobby-dev
$ heroku addons:create newrelic:wayne
$ heroku buildpacks:add --index 1 heroku/nodejs
$ heroku buildpacks:add --index 2 heroku/ruby
$ heroku labs:enable runtime-dyno-metadata 
```

#### Configuring

```bash
$ heroku config:set APP_DOMAIN <app-name.herokuapp.com>
$ heroku config:set SENDGRID_USERNAME <bob>
$ heroku config:set SENDGRID_PASSWORD <bobs_password>
$ heroku config:set SENTRY_DSN <https://sentry.private.dsn>