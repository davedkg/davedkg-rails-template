# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    sequence(:name) { |n| "User #{n} Name" }
    sequence(:email) { |n| "user#{n}@example.com" }
    password { Faker::Internet.password(min_length: 15, max_length: 128) }
    confirmed_at { Time.zone.now }
    invitation_accepted_at { Time.zone.now }

    trait :with_avatar do
      avatar { FilesSpecHelper.png_200x200 }
    end

    trait :admin do
      role { User.roles[:admin] }
    end

    trait :invitation_not_accepted do
      invitation_accepted_at { nil }
    end

    trait :locked do
      locked_at { Time.zone.now }
    end

    trait :disabled do
      state { User.states[:disabled] }
    end
  end
end
