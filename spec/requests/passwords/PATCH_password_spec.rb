# frozen_string_literal: true

require "rails_helper"

describe "PATCH user_password_path", type: :request do
  let!(:user) { create(:user) }
  let!(:reset_password_token) { user.send_reset_password_instructions }
  let(:new_password) { attributes_for(:user)[:password] }
  let(:user_params) { { password: new_password, password_confirmation: new_password, reset_password_token: reset_password_token } }

  context "when passwords are valid and match" do
    context "when reset_password_token is correct" do
      it "returns redirect status" do
        described_request
        expect(response).to have_http_status(:redirect)
      end

      it "updates the user's password" do
        expect { described_request }.to(change { user.reload.encrypted_password })
      end
    end
  end

  context "when passwords are invalid" do
    let(:new_password) { nil }

    it "returns ok status" do
      described_request
      expect(response).to have_http_status(:ok)
    end

    it "does not update the user's password" do
      expect { described_request }.not_to(change { user.reload.encrypted_password })
    end
  end

  context "when reset_password_token is incorrect" do
    let(:reset_password_token) { nil }

    it "returns ok status" do
      described_request
      expect(response).to have_http_status(:ok)
    end

    it "does not update the user's password" do
      expect { described_request }.not_to(change { user.reload.encrypted_password })
    end
  end

  def described_request
    patch user_password_path, params: { user: user_params }
  end
end
