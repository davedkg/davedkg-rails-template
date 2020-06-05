# frozen_string_literal: true

require 'rails_helper'

describe 'GET new_user_unlock_path', type: :request do
  subject { get new_user_unlock_path }

  before { subject }

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end
end
