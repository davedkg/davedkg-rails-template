FactoryBot.define do
  factory :session do
    user { create(:user) }
    ip_address Faker::Internet.private_ip_v4_address
  end
end
