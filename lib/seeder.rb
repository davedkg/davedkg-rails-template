class Seeder

  def self.create_users
    users_file = File.read(Rails.root.join("db", "seeds", "users.json"))
    JSON.parse(users_file).each do |user_json|
      build_user(user_json).save
    end
  end

  private

  def self.build_user(user_json)
    time_current = Time.current

    user = User.new(
      email: user_json["email"],
      password: user_json["password"],
      confirmed_at: time_current,
      invitation_accepted_at: time_current
    )

    user
  end

end