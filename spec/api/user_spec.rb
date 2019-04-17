require 'rails_helper'

RSpec.describe Endpoints::User do

  let(:user_params) { attributes_for(:user) }
  let!(:user) { User.create(user_params) }

  describe "GET /v1/user" do
    before(:each) do
      get '/v1/user', headers: { 'X-Auth-Token' => user.auth_token }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
