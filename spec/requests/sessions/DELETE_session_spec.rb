# frozen_string_literal: true

require "rails_helper"

describe "DELETE destroy_user_session_path", type: :request do
  before { delete destroy_user_session_path }

  it "returns redirect status" do
    expect(response).to have_http_status(:redirect)
  end
end
