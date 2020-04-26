require "rails_helper"

describe "GET edit_user_path", type: :request do

  let(:user_params) { attributes_for(:user) }
  let(:user) { create(:user) }
  let(:other_user) { create(:user) }

  before do
    sign_in user
  end

  context "as a user" do
    it "returns not_found status" do
      described_request
      expect(response).to have_http_status(:not_found)
    end

    context "when user == current_user" do
      let(:other_user) { user }

      it "returns redirect status" do
        described_request
        expect(response).to have_http_status(:redirect)
      end

      it "updates a user" do
        expect {
          described_request
        }.to change { other_user.reload.updated_at }
      end
    end
  end

  context "as an admin" do
    let(:user) { create(:user, :admin) }

    it "returns not_found status" do
      described_request
      expect(response).to have_http_status(:not_found)
    end
  end

  def described_request
    patch user_path(other_user), params: { user: user_params }
  end

end