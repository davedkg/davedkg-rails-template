web: bundle exec puma -C config/puma.rb
worker: env TERM_CHILD=1 QUEUE=high,normal,low bundle exec rake resque:work