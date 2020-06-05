# frozen_string_literal: true

namespace :acceptance do
  task :setup do
    require_relative Rails.root.join('lib', 'seeder.rb')

    Seeder.create_users
  end

  task :teardown do
  end
end
