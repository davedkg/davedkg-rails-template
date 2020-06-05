# frozen_string_literal: true

require 'rails_helper'

describe 'GET edit_user_password_path', type: :request do
  subject { get edit_user_password_path, params: { reset_password_token: reset_password_token } }

  let(:user) { create(:user) }
  let!(:reset_password_token) { user.send_reset_password_instructions }

  before { subject }

  it 'returns ok status' do
    expect(response).to have_http_status(:ok)
  end

  context 'when reset_password_token is incorrect' do
    let(:reset_password_token) { 'foo' }

    it 'returns redirect status' do
      expect(response).to have_http_status(:redirect)
    end
  end
end
