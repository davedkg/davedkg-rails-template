# frozen_string_literal: true

require 'rails_helper'

describe 'GET user_path', type: :request do
  subject { get user_path(record) }

  let(:user) { create(:user) }
  let(:record) { create(:user) }

  before do
    sign_in user
    subject
  end

  context 'when role is user' do
    it 'returns not_found status' do
      expect(response).to have_http_status(:not_found)
    end

    context 'when user == current_user' do
      let(:record) { user }

      it 'returns ok status' do
        expect(response).to have_http_status(:ok)
      end
    end
  end

  context 'when role is admin' do
    let(:user) { create(:user, :admin) }

    it 'returns ok status' do
      expect(response).to have_http_status(:ok)
    end
  end
end
