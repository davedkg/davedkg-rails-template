# frozen_string_literal: true

require 'rails_helper'

describe 'PATCH update_password_me_path' do
  subject(:request) { patch update_password_me_path(format: :turbo_stream), params: { user: user_params } }

  let(:old_user_params) { attributes_for(:user) }
  let(:new_user_params) { attributes_for(:user) }
  let(:user) { create(:user, old_user_params) }
  let(:record) { user }

  let(:user_params) do
    new_user_params.merge(
      current_password: old_user_params[:password],
      confirm_password: new_user_params[:password]
    )
  end

  before do
    sign_in user
  end

  it 'returns ok status' do
    request
    expect(response).to have_http_status(:ok)
  end

  it 'updates record' do
    expect do
      request
    end.to(change { record.reload.updated_at })
  end
end
