# frozen_string_literal: true

require 'rails_helper'

describe 'POST <%= plural_name %>_path', type: :request do
  subject(:request) { post <%= plural_name %>_path, params: { <%= plural_name.singularize %>: <%= plural_name.singularize %>_params } }

  let(:<%= plural_name.singularize %>_params) { attributes_for(:<%= plural_name.singularize %>) }
  let(:user) { create(:user) }

  before do
    sign_in user
  end

  it 'returns redirect status' do
    request
    expect(response).to have_http_status(:redirect)
  end

  it 'creates a record' do
    expect do
      request
    end.to change(<%= plural_name.singularize.titleize %>, :count).by(1)
  end
end