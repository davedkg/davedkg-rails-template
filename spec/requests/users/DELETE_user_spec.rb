# frozen_string_literal: true

require 'rails_helper'

describe 'DELETE user_path', type: :request do
  subject { delete user_path(record) }

  let(:user) { create(:user) }
  let(:record) { create(:user) }

  before do
    sign_in user
  end

  context 'when role is user' do
    it 'returns not_found status' do
      subject
      expect(response).to have_http_status(:not_found)
    end
  end

  context 'when role is admin' do
    let(:user) { create(:user, :admin) }

    it 'returns redirect status' do
      subject
      expect(response).to have_http_status(:redirect)
    end

    it 'deletes the record' do
      expect do
        subject
      end.to change { record.reload.deleted_at }
    end
  end
end
