# frozen_string_literal: true

require 'rails_helper'

describe 'GET new_user_session_path' do
  subject(:request) { get new_user_session_path }

  before { request }

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end
end
