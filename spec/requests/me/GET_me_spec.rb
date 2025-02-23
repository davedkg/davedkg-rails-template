# frozen_string_literal: true

require 'rails_helper'

describe 'GET me_path' do
  subject(:request) { get me_path }

  let(:user) { create(:user) }
  let(:record) { user }

  before do
    sign_in user
    request
  end

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end
end
