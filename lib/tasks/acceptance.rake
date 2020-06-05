# frozen_string_literal: true

namespace :acceptance do
  task setup: :environment do
    require_relative Rails.root.join('lib/seeder.rb')

    Seeder.create_users
  end

  task teardown: :environment do
  end
end
