FactoryBot.define do
  
  factory :user do
    email { Faker::Internet.email }
    password { Faker::Internet.password(10, 20, true) }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name  }
    confirmed_at Time.now
  end
  
end