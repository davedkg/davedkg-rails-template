# davedkg-rails-template
[![Maintainability](https://api.codeclimate.com/v1/badges/84c96cc264dcf00b0449/maintainability)](https://codeclimate.com/github/davedkg/davedkg-rails-template/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/84c96cc264dcf00b0449/test_coverage)](https://codeclimate.com/github/davedkg/davedkg-rails-template/test_coverage)
[![CircleCI](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/master.svg?style=shield)](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/master)

## Getting Started

- fork
- local setup
- deploy to heroku

## Local Setup

```bash
$ brew install mongodb redis yarn
$ rvm install 2.6.4
$ bundle && yarn
$ gem install foreman
$ cp .env.sample .env
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

## Heroku Setup

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/davedkg/davedkg-rails-template/tree/master)

#### TODOS

- clone repo
- create first user
- turn on worker thread
- how to use deploy to heroku button

#### Optional Configuring

```bash
$ heroku labs:enable runtime-dyno-metadata # Sentry Release Detection
$ heroku config:set APP_DOMAIN www.example.com
```