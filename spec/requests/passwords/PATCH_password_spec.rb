# frozen_string_literal: true

require 'rails_helper'

describe 'PATCH user_password_path', type: :request do
  subject { patch user_password_path, params: { user: user_params } }

  let!(:user) { create(:user) }
  let!(:reset_password_token) { user.send_reset_password_instructions }
  let(:new_password) { attributes_for(:user)[:password] }
  let(:user_params) do
    { password: new_password, password_confirmation: new_password, reset_password_token: reset_password_token }
  end

  it 'returns redirect status' do
    subject
    expect(response).to have_http_status(:redirect)
  end

  it "updates the user's password" do
    expect { subject }.to(change { user.reload.encrypted_password })
  end

  context 'when passwords are invalid' do
    let(:new_password) { nil }

    it 'returns ok status' do
      subject
      expect(response).to have_http_status(:ok)
    end

    it "does not update the user's password" do
      expect { subject }.not_to(change { user.reload.encrypted_password })
    end
  end

  context 'when reset_password_token is incorrect' do
    let(:reset_password_token) { nil }

    it 'returns ok status' do
      subject
      expect(response).to have_http_status(:ok)
    end

    it "does not update the user's password" do
      expect { subject }.not_to(change { user.reload.encrypted_password })
    end
  end
end
