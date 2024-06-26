# frozen_string_literal: true

require 'rails_helper'

describe 'GET <%= plural_name %>_path', type: :request do
  subject(:request) { get <%= plural_name %>_path }

  let(:user) { create(:user) }

  before do
    sign_in user
    create(:<%= plural_name.singularize %>)
    request
  end

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end
end