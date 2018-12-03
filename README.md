# davedkg-rails-template
[![Maintainability](https://api.codeclimate.com/v1/badges/84c96cc264dcf00b0449/maintainability)](https://codeclimate.com/github/davedkg/davedkg-rails-template/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/84c96cc264dcf00b0449/test_coverage)](https://codeclimate.com/github/davedkg/davedkg-rails-template/test_coverage)
[![CircleCI](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/master.svg?style=shield)](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/master)
[![Inch CI](https://inch-ci.org/github/davedkg/davedkg-rails-template.svg?branch=master)](https://inch-ci.org/github/davedkg/davedkg-rails-template/suggestions?branch=master)

## Local Setup

```bash
$ brew install mongodb redis npm
$ rvm install 2.5.3
$ bundle && yarn
$ cp config/application.example.yml config/application.yml
$ rspec
$ foreman start -f Procfile.dev
$ open http://localhost:3000/
```

#### Create First User

```bash
$ rails c
$ <pry> User.invite!(email: "bob@bob.com")
$ <pry> exit
$ tail -100 log/development.log
```

And then find the accept invitation link in the log.

## Heroku Setup

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

#### TODOS

- clone repo
- create firstr user
- turn on worker thread

#### Optional Configuring

```bash
$ heroku labs:enable runtime-dyno-metadata
$ heroku config:set APP_DOMAIN www.example.com
```