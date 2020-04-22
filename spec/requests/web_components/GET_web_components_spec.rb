require "rails_helper"

describe "GET web_components_path", type: :request do

  let(:user) { create(:user) }

  before do
    sign_in user
    get web_components_path
  end

  context "as a user" do
    it "returns redirect status" do
      expect(response).to have_http_status(:redirect)
    end
  end

  context "as an admin" do
    let(:user) { create(:user, :admin) }

    it "returns ok status" do
      expect(response).to have_http_status(:ok)
    end
  end

end