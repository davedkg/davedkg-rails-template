require "rails_helper"

describe "GET new_user_path", type: :request do

  let(:admin) { create(:user) }

  before do
    sign_in admin
    get new_user_path
  end

  it "returns ok status" do
    expect(response).to have_http_status(:ok)
  end
end