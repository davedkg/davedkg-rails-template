# frozen_string_literal: true

require "rails_helper"

describe "GET user_confirmation_path", type: :request do
  let(:user) { create(:user, :unconfirmed) }
  let!(:confirmation_token) { user.confirmation_token }

  before { get user_confirmation_path, params: { confirmation_token: confirmation_token } }

  context "when confirmation_token is valid" do
    it "returns redirect status" do
      expect(response).to have_http_status(:redirect)
    end

    it "marks user as confirmed?" do
      expect(user.reload).to be_confirmed
    end
  end

  context "when confirmation_token is invalid" do
    let!(:confirmation_token) { nil }

    it "returns ok status" do
      expect(response).to have_http_status(:ok)
    end

    it "does not mark user as confirmed?" do
      expect(user.reload).not_to be_confirmed
    end
  end
end
