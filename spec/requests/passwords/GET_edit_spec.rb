# frozen_string_literal: true

require 'rails_helper'

describe 'GET edit_user_password_path' do
  subject(:request) { get edit_user_password_path, params: { reset_password_token: } }

  let(:user) { create(:user) }
  let!(:reset_password_token) { user.send_reset_password_instructions }

  before { request }

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end

  context 'when reset_password_token is incorrect' do
    let(:reset_password_token) { 'foo' }

    it 'returns ok status' do
      expect(response).to have_http_status(:ok)
    end
  end
end
