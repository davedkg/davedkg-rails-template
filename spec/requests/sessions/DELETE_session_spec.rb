require 'rails_helper'

describe 'DELETE destroy_user_session_path' do
  subject(:request) { delete destroy_user_session_path }

  before { request }

  it 'returns redirect status' do
    expect(response).to have_http_status(:redirect)
  end
end
