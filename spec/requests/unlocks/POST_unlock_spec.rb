require "rails_helper"

describe "POST user_unlock_path", type: :request do

  let(:user) { create(:user) }

  before do
    Devise.mailer.deliveries.clear
    user.lock_access!
  end


  it "creates a lock token" do
    expect {
      described_request
    }.to change { user.reload.unlock_token }
  end

  it "sends an unlock email" do
    expect {
      described_request
    }.to change { Devise.mailer.deliveries.size }.by(1)
  end

  def described_request
    post user_unlock_path, params: { user: { email: user.email } }
  end

end

