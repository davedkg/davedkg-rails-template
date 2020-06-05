# frozen_string_literal: true

require 'rails_helper'

describe 'GET user_unlock_path', type: :request do
  subject { get user_unlock_path, params: { unlock_token: raw_unlock_token } }

  let(:user) { create(:user, :locked) }
  let(:raw_unlock_token) { user.send_unlock_instructions }

  it 'returns redirect status' do
    subject
    expect(response).to have_http_status(:redirect)
  end

  it 'redirects to new_user_session_path' do
    subject
    expect(response).to redirect_to(new_user_session_path)
  end

  it "unlocks user's account" do
    expect do
      subject
    end.to change { user.reload.locked? }
  end

  context 'when unlock_token is invalid' do
    let(:raw_unlock_token) { 'invalid_token' }

    it 'returns redirect status' do
      subject
      expect(response).to have_http_status(:ok)
    end

    it "does not unlock user's account" do
      expect do
        subject
      end.not_to change { user.reload.locked? }
    end
  end
end
