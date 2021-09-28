require 'rails_helper'

describe 'DELETE <%= plural_name.singularize %>_path', type: :request do
  subject { delete <%= plural_name.singularize %>_path(record) }

  let(:user) { create(:user) }
  let(:record) { create(:<%= plural_name.singularize %>) }

  before do
    sign_in user
  end

  it 'returns redirect status' do
    subject
    expect(response).to have_http_status(:redirect)
  end

  it 'deletes record' do
    expect do
      subject
    end.to change { record.reload.deleted_at }
  end
end