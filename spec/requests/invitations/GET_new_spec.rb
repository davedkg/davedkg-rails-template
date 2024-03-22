# frozen_string_literal: true

require 'rails_helper'

describe 'GET new_user_invitation_path', type: :request do
  subject { get new_user_invitation_path }

  before { subject }

  it 'returns redirect status' do
    expect(response).to have_http_status(:redirect)
  end

  it 'redirects_to new_user_session_path' do
    expect(response).to redirect_to(new_user_session_path)
  end
end
