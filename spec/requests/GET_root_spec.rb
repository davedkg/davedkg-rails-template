require 'rails_helper'

describe 'GET root_path' do
  subject(:request) { get root_path }

  let(:user) { create(:user) }

  before do
    sign_in user
    request
  end

  it 'returns redirect status' do
    expect(response).to have_http_status(:redirect)
  end

  it 'redirects to dashboard_path path' do
    expect(response).to redirect_to(dashboard_path)
  end

  context 'when user is disabled' do
    let(:user) { create(:user, :disabled) }

    it 'returns redirect status' do
      expect(response).to have_http_status(:redirect)
    end

    it 'redirects to sign_in path' do
      expect(response).to redirect_to(new_user_session_path)
    end
  end

  context 'when user DOES NOT have dashboard access' do
    before { allow_any_instance_of(DashboardPolicy).to receive(:show?).and_return(false) }

    it 'returns redirect status' do
      expect(response).to have_http_status(:redirect)
    end
  end
end
