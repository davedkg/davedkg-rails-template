require "rails_helper"

describe "GET user_unlock_path", type: :request do

  let(:user) { create(:user) }
  let(:raw_unlock_token) { user.send_unlock_instructions }

  before do
    user.lock_access!
  end

  context "when unlock_token is valid" do
    it "returns redirect status" do
      described_request

      expect(response).to have_http_status(:redirect)
    end

    it "redirects to new_user_session_path" do
      described_request

      expect(response).to redirect_to(new_user_session_path)
    end

    it "unlocks user's account" do
      expect {
        described_request
      }.to change{ user.reload.access_locked? }
    end
  end

  context "when unlock_token is invalid" do
    let(:raw_unlock_token) { 'invalid_token' }

    it "returns redirect status" do
      described_request

      expect(response).to have_http_status(:ok)
    end

    it "unlocks user's account" do
      expect {
        described_request
      }.not_to change{ user.reload.access_locked? }
    end
  end

  def described_request
    get user_unlock_path, params: { unlock_token: raw_unlock_token }
  end

end

