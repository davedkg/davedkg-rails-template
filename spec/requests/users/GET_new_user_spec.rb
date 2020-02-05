require "rails_helper"

describe "GET new_user_path", type: :request do

  let(:user) { create(:user) }

  before do
    sign_in user
    get new_user_path
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