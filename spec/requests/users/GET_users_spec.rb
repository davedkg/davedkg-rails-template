require "rails_helper"

describe "GET users_path", type: :request do

  let(:admin) { create(:user) }

  before do
    sign_in admin
    get users_path
  end

  it "returns ok status" do
    expect(response).to have_http_status(:ok)
  end
end