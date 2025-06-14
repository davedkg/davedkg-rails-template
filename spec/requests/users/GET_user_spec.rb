# frozen_string_literal: true

require 'rails_helper'

describe 'GET user_path' do
  subject(:request) { get user_path(record) }

  let(:user) { create(:user, :admin) }
  let(:record) { create(:user) }

  before do
    sign_in user
    request
  end

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end
end
