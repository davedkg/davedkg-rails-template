require 'rails_helper'

describe 'PATCH user_invitation_path' do
  subject(:request) { patch user_invitation_path, params: { user: user_params } }

  let(:user) { create(:user, :invitation_not_accepted) }
  let(:user_params) { { password:, invitation_token: raw_invitation_token } }
  let(:password) { user.password }
  let(:raw_invitation_token) do
    user.invite! { |u| u.skip_invitation = true }
    user.raw_invitation_token
  end

  before { request }

  it 'returns redirect status' do
    expect(response).to have_http_status(:redirect)
  end

  it 'marks user as invitation_accepted?' do
    expect(user.reload).to be_invitation_accepted
  end

  context 'when password is invalid' do
    let(:password) { nil }

    it 'returns unprocessable_entity status' do
      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'does not mark user as invitation_accepted?' do
      expect(user.reload).not_to be_invitation_accepted
    end
  end

  context 'when invitation_token is incorrect' do
    let(:raw_invitation_token) { nil }

    it 'returns unprocessable_entity status' do
      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'does not mark user as invitation_accepted?' do
      expect(user.reload).not_to be_invitation_accepted
    end
  end
end
