# frozen_string_literal: true

if defined?(RuboCop)
  require 'rubocop/rake_task'
  RuboCop::RakeTask.new
end

namespace :lint do
  task :rubocop do
    Rake::Task['rubocop'].invoke
  end
end

task "fix": ['rubocop:auto_correct']
task "lint": ['lint:rubocop']
