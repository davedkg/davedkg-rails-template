# davedkg-rails-template

## Libaries
| Name | Description |
| ---- | ----------- |
| (Grape)[https://github.com/ruby-grape/grape] | An opinionated framework for creating REST-like APIs in Ruby. |



# TODOS

- document ping url usage

## Configure
config/initializers/constants.rb
config/mongoid.yml
config/applcation.yml

## Development

bundle and yarn
brew install memcached
mongoid
resque


#### Kill Mailcatcher

sudo lsof -nP -iTCP:1025 -sTCP:LISTEN

## Heroku

heroku labs:enable runtime-dyno-metadata
redis
mlab



heroku buildpacks:add --index 1 heroku/nodejs