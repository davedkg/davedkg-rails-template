# frozen_string_literal: true

require 'rails_helper'

describe 'GET <%= plural_name.singularize %>_path', type: :request do
  subject { get <%= plural_name.singularize %>_path(record) }

  let(:user) { create(:user) }
  let(:record) { create(:<%= plural_name.singularize %>) }

  before do
    sign_in user
    subject
  end

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end
end
