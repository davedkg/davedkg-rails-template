# frozen_string_literal: true

require 'rails_helper'

describe 'GET accept_user_invitation_path', type: :request do
  subject { get accept_user_invitation_path(user, invitation_token: raw_invitation_token) }

  let(:user) { create(:user, :invitation_not_accepted) }
  let(:raw_invitation_token) do
    user.invite! { |u| u.skip_invitation = true }
    user.raw_invitation_token
  end

  before { subject }

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end

  context 'when invitation_token is invalid' do
    let(:raw_invitation_token) { nil }

    it 'returns redirect status' do
      expect(response).to have_http_status(:redirect)
    end

    it 'redirects to new_user_session_path' do
      expect(response).to redirect_to(new_user_session_path)
    end
  end
end
