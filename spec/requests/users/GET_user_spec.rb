require "rails_helper"

describe "GET user_path", type: :request do

  let(:user) { create(:user) }

  before do
    sign_in user
    get user_path(user)
  end

  context "as a user" do
    it "returns not_found status" do
      expect(response).to have_http_status(:not_found)
    end
  end

  context "as an admin" do
    let(:user) { create(:user, :admin) }

    it "returns ok status" do
      expect(response).to have_http_status(:ok)
    end
  end

end