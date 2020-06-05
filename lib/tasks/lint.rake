# frozen_string_literal: true

if defined?(RuboCop)
  require 'rubocop/rake_task'
  RuboCop::RakeTask.new
end

namespace :lint do
  task rubocop: :environment do
    Rake::Task['rubocop'].invoke
  end

  task reek: :environment do
    puts 'Running Reek...'
    sh 'reek -c .reek.yml'
  end
end

task "fix": ['rubocop:auto_correct']
task "lint": ['lint:rubocop', 'lint:reek']
