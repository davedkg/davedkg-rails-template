# frozen_string_literal: true

require 'rails_helper'

describe 'POST disable_user_path' do
  subject(:request) { post disable_user_path(record) }

  let(:user) { create(:user) }
  let(:record) { create(:user) }

  before do
    sign_in user
  end

  context 'when role is user' do
    it 'returns not_found status' do
      request
      expect(response).to have_http_status(:not_found)
    end
  end

  context 'when role is admin' do
    let(:user) { create(:user, :admin) }

    it 'returns redirect status' do
      request
      expect(response).to have_http_status(:redirect)
    end

    it 'sends an email' do
      expect do
        request
      end.to(change { record.reload.disabled? })
    end
  end
end
