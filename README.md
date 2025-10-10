# davedkg-rails-template

[![CircleCI](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/main.svg?style=shield)](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/main)
[![Code Coverage](https://qlty.sh/badges/fa3e0917-38ae-4cee-ba29-d9ecb33d3d46/test_coverage.svg)](https://qlty.sh/gh/davedkg/projects/davedkg-rails-template)
[![Maintainability](https://qlty.sh/badges/fa3e0917-38ae-4cee-ba29-d9ecb33d3d46/maintainability.svg)](https://qlty.sh/gh/davedkg/projects/davedkg-rails-template)

## Custom Scaffold

Custom scaffold generates controller, model, policy, and views with corresponding rspec files.

```bash
rails g scaffold Object attribute1 attribute2
```

## Local Setup

```bash
brew install postgresql
bundle && yarn
cp .env.template .env
bundle exec rake db:setup db:seed
rspec
foreman start -f Procfile.dev
open http://localhost:3000/
```

### Create First User

```bash
rails c
<pry> User.invite!(email: "bob@bob.com")
<pry> exit
tail -200 log/development.log
```

And then find the accept invitation link in the log or use ```rake development:seed``` (see below).

### Custom Rake Tasks

| Task | Description |
| --- | --- |
| development:reset | Reset development and test databases, run development:seed, clear out tmp files |
| development:seed | Create seed data for development enviornment |
| fix | Run Auto-correctors for Linters |

### Development Users

Created when running ```rake development:seed```.

| Email | Password |
| --- | --- |
| user@example.com | users_password123 |
| admin@example.com | admins_password123 |

## Rebrand App

| File | Change |
| --- | --- |
| .circleci/config.yml | database name |
| config/initializers/constants.rb | PLATFORM_NAME |
| config/application.rb | Rails::Application module name |
| config/database.yml | database names |
| .ruby-gemset | gemset name |
| README.md | project title |
| app.json | name, description, reposiitory |

## Merge Template Updates

### Setup

```bash
git remote add template git@github.com:davedkg/davedkg-rails-template.git
```

### Merge

```bash
git pull template main --allow-unrelated-histories
git merge --allow-unrelated-histories template/main
```

## Heroku

### Configuring

```bash
heroku buildpacks:add heroku/ruby
heroku buildpacks:set --index 1 https://github.com/leoafarias/heroku-buildpack-node-modules-cleanup
heroku labs:enable runtime-dyno-metadata # Sentry Release Detection, HEROKU_APP_NAME
heroku config:set APP_DOMAIN www.example.com
heroku config:set SOLID_QUEUE_IN_PUMA true
```

### Solid

Deploying to heroku will automatically enable SolidQueue, SolidCache and SolidCable.
