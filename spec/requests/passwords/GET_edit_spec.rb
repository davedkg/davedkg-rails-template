# frozen_string_literal: true

require "rails_helper"

describe "GET edit_user_password_path", type: :request do
  let(:user) { create(:user) }
  let!(:reset_password_token) { user.send_reset_password_instructions }

  before { get edit_user_password_path, params: { reset_password_token: reset_password_token } }

  context "when reset_password_token is correct" do
    it "returns ok status" do
      expect(response).to have_http_status(:ok)
    end
  end

  context "when reset_password_token is incorrect" do
    let(:reset_password_token) { "foo" }

    it "returns redirect status" do
      expect(response).to have_http_status(:redirect)
    end
  end
end
