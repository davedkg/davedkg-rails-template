web: bundle exec puma -C config/puma.rb
worker: QUEUE=* bundle exec rake resque:work
release: bundle exec rake db:migrate db:seed