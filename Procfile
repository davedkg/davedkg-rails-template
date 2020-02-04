web: bundle exec puma -C config/puma.rb
worker: env QUEUE=* TERM_CHILD=1 INTERVAL=0.1 RESQUE_PRE_SHUTDOWN_TIMEOUT=20 RESQUE_TERM_TIMEOUT=8 bundle exec rake resque:work
release: bundle exec rake db:migrate db:seed