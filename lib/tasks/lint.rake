# frozen_string_literal: true

if defined?(RuboCop)
  require 'rubocop/rake_task'
  RuboCop::RakeTask.new
end

namespace :lint do
  task brakeman: :environment do
    puts 'Running Brakeman...'
    sh 'brakeman'
  end

  task reek: :environment do
    puts 'Running Reek...'
    sh 'reek -c .reek.yml'
  end

  task fasterer: :environment do
    puts 'Running Fasterer...'
    sh 'fasterer'
  end
end

task fix: ['rubocop:auto_correct']
task lint: ['rubocop', 'lint:reek', 'lint:brakeman', 'lint:fasterer']
