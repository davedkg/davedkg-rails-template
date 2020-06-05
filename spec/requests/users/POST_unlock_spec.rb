# frozen_string_literal: true

require 'rails_helper'

describe 'POST unlock_user_path', type: :request do
  subject { post unlock_user_path(record) }

  let(:user) { create(:user) }
  let(:record) { create(:user, :locked) }

  before do
    sign_in user
  end

  context 'as a user' do
    it 'returns not_found status' do
      subject
      expect(response).to have_http_status(:not_found)
    end
  end

  context 'as an admin' do
    let(:user) { create(:user, :admin) }

    it 'returns redirect status' do
      subject
      expect(response).to have_http_status(:redirect)
    end

    it 'unlocks record' do
      expect do
        subject
      end.to change { record.reload.locked? }
    end
  end
end
