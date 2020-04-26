require "rails_helper"

describe "POST resend_invitation_user_path", type: :request do

  subject { create(:user, :invitation_not_accepted) }
  let(:user) { create(:user) }

  before do
    sign_in user
  end

  context "as a user" do
    it "returns not_found status" do
      described_request

      expect(response).to have_http_status(:not_found)
    end
  end

  context "as an admin" do
    let(:user) { create(:user, :admin) }

    it "returns redirect status" do
      described_request

      expect(response).to have_http_status(:redirect)
    end

    it "sends an email" do
      expect {
        described_request
      }.to change { Devise.mailer.deliveries.size }.by(1)
    end
  end

  def described_request
    post resend_invitation_email_user_path(subject)
  end

end