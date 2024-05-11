# frozen_string_literal: true

namespace :development do
  task seed: :environment do
    require_relative Rails.root.join('lib/seeder.rb')

    Seeder.create_users
  end

  task reset: [
    'db:reset',
    'development:seed',
    'tmp:cache:clear',
    'assets:clean'
  ] do
    # nothing
  end
end
