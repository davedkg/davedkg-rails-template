# davedkg-rails-template
[![Maintainability](https://api.codeclimate.com/v1/badges/84c96cc264dcf00b0449/maintainability)](https://codeclimate.com/github/davedkg/davedkg-rails-template/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/84c96cc264dcf00b0449/test_coverage)](https://codeclimate.com/github/davedkg/davedkg-rails-template/test_coverage)
[![CircleCI](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/master.svg?style=shield)](https://circleci.com/gh/davedkg/davedkg-rails-template/tree/master)
[![Inch CI](https://inch-ci.org/github/davedkg/davedkg-rails-template/suggestions?branch=master)](https://inch-ci.org/github/davedkg/davedkg-rails-template/suggestions?branch=master)

## Important Libaries
| Name | Description |
| ---- | ----------- |
| [Bootstrap](https://getbootstrap.com/docs/4.0/) | Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. |
| [Bootstrap Notify](http://bootstrap-notify.remabledesigns.com) | This plugin helps to turn standard bootstrap alerts into "growl" like notifications. |
| [Devise](https://github.com/plataformatec/devise) | Flexible authentication solution for Rails with Warden. | 
| [Devise Zxcvbn](https://github.com/bitzesty/devise_zxcvbn) | Devise plugin to reject weak passwords using zxcvbn. | 
| [DirtyForms](https://github.com/snikch/jquery.dirtyforms) | A jQuery Plugin that monitors forms for change and alerts the user before leaving the page. |
| [FactoryBot](https://github.com/thoughtbot/factory_bot) | A library for setting up Ruby objects as test data. |
| [Faker](https://github.com/stympy/faker) | A library for generating fake data such as names, addresses, and phone numbers. |
| [Grape](https://github.com/ruby-grape/grape) | An opinionated framework for creating REST-like APIs in Ruby. |
| [jQuery](https://api.jquery.com) | jQuery is a fast, small, and feature-rich JavaScript library. |
| [RSpec](https://github.com/rspec/rspec) | Behaviour Driven Development for Ruby |
| [Simple Form](https://github.com/plataformatec/simple_form) | Forms made easy for Rails! It's tied to a simple DSL, with no opinion on markup. |


# TODOS

- document ping url usage
- dcument doc/material admin

## Configure
config/initializers/constants.rb
config/mongoid.yml
config/applcation.yml
http://livereload.com/extensions/#installing-sections

## Development

bundle and yarn
brew install memcached
mongoid
resque

## Heroku

heroku labs:enable runtime-dyno-metadata
redis
mlab
memcacher

heroku buildpacks:add --index 1 heroku/nodejs