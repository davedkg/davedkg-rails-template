require "rails_helper"

describe "POST resend_invitation_user_path", type: :request do

  let(:admin) { create(:user) }
  let(:user) { create(:user, :invitation_not_accepted) }

  before do
    sign_in admin
  end

  it "returns redirect status" do
    described_request

    expect(response).to have_http_status(:redirect)
  end

  it "sends an email" do
    expect {
      described_request
    }.to change { Devise.mailer.deliveries.size }.by(1)
  end

  def described_request
    post resend_invitation_user_path(user)
  end

end