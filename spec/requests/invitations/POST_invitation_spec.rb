require 'rails_helper'

describe 'POST user_invitation_path' do
  subject(:request) { get new_user_invitation_path }

  before { request }

  it 'returns redirect status' do
    expect(response).to have_http_status(:redirect)
  end

  it 'redirects_to new_user_session_path' do
    expect(response).to redirect_to(new_user_session_path)
  end
end
