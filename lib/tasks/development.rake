namespace :development do

  task :seed do
    require_relative Rails.root.join("lib", "seeder.rb")

    Seeder.create_users
  end

  task reset: [
    "db:reset",
    "development:seed",
    "tmp:cache:clear",
    "assets:clean"
  ] do
    # nothing
  end
end