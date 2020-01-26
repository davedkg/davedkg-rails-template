# frozen_string_literal: true

require "rails_helper"

describe "POST user_confirmation_path", type: :request do
  let!(:user) { create(:user, :unconfirmed) }

  before do
    Devise.mailer.deliveries.clear
    post user_confirmation_path, params: { user: { email: user.email } }
  end

  context "when user is unconfirmed" do
    it "returns redirect status" do
      expect(response).to have_http_status(:redirect)
    end

    it "redirects to new_user_session_path" do
      expect(response).to redirect_to(new_user_session_path)
    end

    it "sends an email" do
      expect(Devise.mailer.deliveries.size).to eq(1)
    end
  end

  context "when user is already confirmed" do
    let!(:user) { create(:user) }

    it "returns redirect status" do
      expect(response).to have_http_status(:redirect)
    end

    it "redirects to new_user_session_path" do
      expect(response).to redirect_to(new_user_session_path)
    end

    it "does not send an email" do
      expect(Devise.mailer.deliveries.size).to eq(0)
    end
  end
end
