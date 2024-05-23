require 'rails_helper'

describe 'DELETE <%= plural_name.singularize %>_path', type: :request do
  subject(:request) { delete <%= plural_name.singularize %>_path(record) }

  let(:user) { create(:user) }
  let(:record) { create(:<%= plural_name.singularize %>) }

  before do
    sign_in user
  end

  it 'returns redirect status' do
    request
    expect(response).to have_http_status(:redirect)
  end

  it 'deletes record' do
    expect do
      request
    end.to change { record.reload.deleted_at }
  end
end