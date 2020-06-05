# frozen_string_literal: true

require 'rails_helper'

describe 'GET new_user_path', type: :request do
  subject { get new_user_path }

  let(:user) { create(:user) }

  before do
    sign_in user
    subject
  end

  context 'when role is user' do
    it 'returns not_found status' do
      expect(response).to have_http_status(:not_found)
    end
  end

  context 'when role is admin' do
    let(:user) { create(:user, :admin) }

    it 'returns ok status' do
      expect(response).to have_http_status(:ok)
    end
  end
end
