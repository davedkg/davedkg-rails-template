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

  task scss: :environment do
    puts 'Running SCSS Lint...'
    sh 'scss-lint --config .scss-lint.yml'
  end
end

task fix: ['rubocop:autocorrect_all']
task lint: ['rubocop', 'lint:reek', 'link:scss', 'lint:brakeman', 'lint:fasterer']
