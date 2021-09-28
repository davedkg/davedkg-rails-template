# frozen_string_literal: true

require 'rails_helper'

describe 'GET <%= plural_name %>_path', type: :request do
  subject { get <%= plural_name %>_path }

  let(:user) { create(:user) }

  before do
    sign_in user
    create(:<%= plural_name.singularize %>)
    subject
  end

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end
end