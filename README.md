# davedkg-rails-template

## Important Libaries
| Name | Description |
| ---- | ----------- |
| [Bootstrap](https://getbootstrap.com/docs/4.0/) | Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. |
| [Devise](https://github.com/plataformatec/devise) | Flexible authentication solution for Rails with Warden. | 
| [Devise Zxcvbn](https://github.com/bitzesty/devise_zxcvbn) | Devise plugin to reject weak passwords using zxcvbn. | 
| [FactoryBot](https://github.com/thoughtbot/factory_bot) | A library for setting up Ruby objects as test data. |
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