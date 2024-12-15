require 'rails_helper'

describe 'GET dashboard_path' do
  subject(:request) { get dashboard_path }

  let(:user) { create(:user) }

  before do
    sign_in user
    request
  end

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end
end
