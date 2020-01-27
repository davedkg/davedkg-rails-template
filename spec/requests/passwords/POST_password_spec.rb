# frozen_string_literal: true

require "rails_helper"

describe "POST user_password_path", type: :request do
  let!(:user) { create(:user) }
  let(:email) { user.email }

  before do
    Devise.mailer.deliveries.clear
    post user_password_path, params: { user: { email: email } }
  end

  context "when the email belongs to a user" do
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

  context "when the email does not belong to a user" do
    let(:email) { "foo@example.com" }

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
