# frozen_string_literal: true

require "rails_helper"

describe "POST user_session_path", type: :request do
  let!(:user) { create(:user) }
  let(:user_email) { user.email }
  let(:user_password) { user.password }
  let(:user_params) { { email: user_email, password: user_password } }
  let(:request_params) { { user: user_params } }

  before { post user_session_path, params: request_params }

  context "when email and password are valid" do
    it "returns redirect status" do
      expect(response).to have_http_status(:redirect)
    end

    it "redirects to root_path" do
      expect(response).to redirect_to(root_path)
    end
  end

  context "when email is invalid" do
    let(:user_email) { "invalid@example.com" }

    it "returns ok status" do
      expect(response).to have_http_status(:ok)
    end
  end

  context "when password is invalid" do
    let(:user_password) { "invalid_password" }

    it "returns ok status" do
      expect(response).to have_http_status(:ok)
    end
  end
end
