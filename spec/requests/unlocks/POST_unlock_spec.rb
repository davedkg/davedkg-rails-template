require "rails_helper"

describe "POST user_unlock_path", type: :request do

  subject { post user_unlock_path, params: { user: user_params } }

  let(:user_params) { { email: user.email } }
  let(:user) { create(:user, :locked) }

  before do
    Devise.mailer.deliveries.clear
  end

  it "creates a lock token" do
    expect {
      subject
    }.to change { user.reload.unlock_token }
  end

  it "sends an unlock email" do
    expect {
      subject
    }.to change { Devise.mailer.deliveries.size }.by(1)
  end

end

