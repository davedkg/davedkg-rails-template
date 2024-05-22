# frozen_string_literal: true

require 'rails_helper'

describe 'PATCH <%= plural_name.singularize %>_path', type: :request do
  subject { patch <%= plural_name.singularize %>_path(record), params: { <%= plural_name.singularize %>: <%= plural_name.singularize %>_params } }

  let(:<%= plural_name.singularize %>_params) { attributes_for(:<%= plural_name.singularize %>) }
  let(:user) { create(:user) }
  let(:record) { create(:<%= plural_name.singularize %>) }

  before do
    sign_in user
  end

  it 'returns redirect status' do
    subject
    expect(response).to have_http_status(:redirect)
  end

  it 'updates record' do
    expect do
      subject
    end.to change { record.reload.updated_at }
  end
end