namespace :development do
  task seed: :environment do
    require_relative Rails.root.join("lib", "seeder.rb")

    Seeder.create_users
  end

  task reset: [
    "db:reset",
    "development:seed",
    "tmp:cache:clear"
  ] do
    # nothing
  end
end
