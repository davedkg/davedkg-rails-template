# frozen_string_literal: true

require 'rails_helper'

describe 'POST user_unlock_path' do
  subject(:request) { post user_unlock_path, params: { user: user_params } }

  let(:user_params) { { email: user.email } }
  let(:user) { create(:user, :locked) }

  it 'creates a lock token' do
    expect do
      request
    end.to(change { user.reload.unlock_token })
  end

  it 'sends an unlock email' do
    expect do
      request
    end.to change { Devise.mailer.deliveries.size }.by(1)
  end
end
