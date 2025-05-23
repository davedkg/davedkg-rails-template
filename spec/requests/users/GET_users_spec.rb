# frozen_string_literal: true

require 'rails_helper'

describe 'GET users_path' do
  subject(:request) { get users_path }

  let(:user) { create(:user) }

  before do
    sign_in user
    create(:user, :disabled)
    create(:user, :invitation_not_accepted)
    request
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
