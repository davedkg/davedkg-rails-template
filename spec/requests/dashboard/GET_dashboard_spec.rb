# frozen_string_literal: true

require 'rails_helper'

describe 'GET dashboard_path', type: :request do
  subject { get dashboard_path }

  let(:user) { create(:user) }

  before do
    sign_in user
    subject
  end

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end
end
