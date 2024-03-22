# frozen_string_literal: true

require 'rails_helper'

describe 'GET root_path', type: :request do
  let(:user) { create(:user) }

  before do
    sign_in user
    get root_path
  end

  it 'returns redirect status' do
    expect(response).to have_http_status(:redirect)
  end

  it 'redirects to dashboard_path path' do
    expect(response).to redirect_to(dashboard_path)
  end

  context 'when user is disabled' do
    let!(:user) { create(:user, :disabled) }

    it 'returns redirect status' do
      expect(response).to have_http_status(:redirect)
    end

    it 'redirects to sign_in path' do
      expect(response).to redirect_to(new_user_session_path)
    end
  end
end
