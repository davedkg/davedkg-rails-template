# frozen_string_literal: true

require "rails_helper"

describe "GET new_user_password_path", type: :request do
  let(:user) { create(:user) }
  let(:reset_password_token) { user.send_reset_password_instructions }
  let(:new_password) { attributes_for(:user)[:password] }

  before { get new_user_password_path }

  it "returns ok status" do
    expect(response).to have_http_status(:ok)
  end
end
