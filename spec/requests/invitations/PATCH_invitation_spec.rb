# frozen_string_literal: true

require "rails_helper"

describe "PATCH user_invitation_path", type: :request do
  let(:user) { create(:user, :invitation_not_accepted) }
  let(:password) { user.password }
  let(:raw_invitation_token) do
    user.invite! { |u| u.skip_invitation = true }
    user.raw_invitation_token
  end
  let(:agree_to_legal_terms) { "1" }
  let(:user_params) { { password: password, agree_to_legal_terms: agree_to_legal_terms, invitation_token: raw_invitation_token } }

  before { patch user_invitation_path, params: { user: user_params } }

  context "when password is valid" do
    context "when invitation_token is correct" do
      context "when terms are accepted" do
        it "returns redirect status" do
          expect(response).to have_http_status(:redirect)
        end

        it "marks user as invitation_accepted?" do
          expect(user.reload).to be_invitation_accepted
        end
      end
    end
  end

  context "when password is invalid" do
    let(:password) { nil }

    it "returns ok status" do
      expect(response).to have_http_status(:ok)
    end

    it "does not mark user as invitation_accepted?" do
      expect(user.reload).not_to be_invitation_accepted
    end
  end

  context "when invitation_token is incorrect" do
    let(:raw_invitation_token) { nil }

    it "returns ok status" do
      expect(response).to have_http_status(:ok)
    end

    it "does not mark user as invitation_accepted?" do
      expect(user.reload).not_to be_invitation_accepted
    end
  end
end
