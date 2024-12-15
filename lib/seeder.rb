class Seeder
  def self.create_users
    users_file = Rails.root.join("db", "seeds", "users.json").read
    JSON.parse(users_file).each do |user_json|
      build_user(user_json).save
    end
  end

  def self.build_user(user_json)
    time_current = Time.current

    User.new(
      name: user_json["name"],
      email: user_json["email"],
      password: user_json["password"],
      confirmed_at: time_current,
      invitation_accepted_at: time_current,
      role: user_json["role"] || User.roles[:user]
    )
  end
end
