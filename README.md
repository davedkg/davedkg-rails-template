## Configure
email domain name in mailer and enviornement

## Development

#### Kill Mailcatcher

sudo lsof -nP -iTCP:1025 -sTCP:LISTEN

## Heroku

heroku labs:enable runtime-dyno-metadata
redis
mlab



heroku buildpacks:add --index 1 heroku/nodejs