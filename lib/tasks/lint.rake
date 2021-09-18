# frozen_string_literal: true

if defined?(RuboCop)
  require 'rubocop/rake_task'
  RuboCop::RakeTask.new
end

if defined?(Eslintrb)
  require 'eslintrb/eslinttask'
  Eslintrb::EslintTask.new :eslint do |t|
    t.pattern = 'javascript/**/*.js'
    t.options = :defaults
  end
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

  task scss: :environment do
    puts 'Running SCSS-Lint...'
    sh 'scss-lint -c .scss-lint.yml'
  end

  task fasterer: :environment do
    puts 'Running Fasterer...'
    sh 'fasterer'
  end
end

task "fix": ['rubocop:auto_correct']
task "lint": ['rubocop', 'eslint', 'lint:scss', 'lint:reek', 'lint:brakeman', 'lint:fasterer']
