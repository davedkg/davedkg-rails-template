require "rails_helper"

describe "DELETE user_path", type: :request do

  subject { create(:user) }
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

    it "deletes the user" do
      expect {
        described_request
      }.to change{ subject.reload.deleted_at }
    end
  end

  def described_request
    delete user_path(subject)
  end

end