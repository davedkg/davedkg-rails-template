FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    password { Faker::Internet.password(min_length: 15, max_length: 128) }
    confirmed_at { Time.zone.now }
    invitation_accepted_at { Time.zone.now }

    trait :unconfirmed do
      confirmed_at { nil }
    end

    trait :invitation_not_accepted do
      invitation_accepted_at { nil }
    end
  end
end