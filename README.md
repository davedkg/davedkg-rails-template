# davedkg-rails-template

## Libaries
| Name | Description |
| Grape[https://github.com/ruby-grape/grape] | An opinionated framework for creating REST-like APIs in Ruby. |



# TODOS

- document ping url

## Configure
email domain name in mailer and enviornement # TODO move into a config
config/initializers/constants.rb
config/mongoid.yml
config/applcation.yml

## Development

bundle and yarn

#### Kill Mailcatcher

sudo lsof -nP -iTCP:1025 -sTCP:LISTEN

## Heroku

heroku labs:enable runtime-dyno-metadata
redis
mlab



heroku buildpacks:add --index 1 heroku/nodejs