require "rails_helper"

describe "POST unlock_user_path", type: :request do

  subject { create(:user, :locked) }
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

    it "unlocks subject" do
      expect {
        described_request
      }.to change { subject.reload.locked? }
    end
  end

  def described_request
    post unlock_user_path(subject)
  end

end