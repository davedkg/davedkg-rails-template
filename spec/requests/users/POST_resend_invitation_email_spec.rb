# frozen_string_literal: true

require 'rails_helper'

describe 'POST resend_invitation_user_path', type: :request do
  subject { post resend_invitation_email_user_path(record) }

  let(:user) { create(:user) }
  let(:record) { create(:user, :invitation_not_accepted) }

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

    it 'sends an email' do
      expect do
        subject
      end.to change { Devise.mailer.deliveries.size }.by(1)
    end
  end
end
