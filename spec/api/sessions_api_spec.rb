require 'rails_helper'

RSpec.describe Endpoints::Sessions do
  
  let(:user_params) { attributes_for(:user) }
  let!(:user) { User.create!(user_params) }
  let(:device_session) { create(:device_session) }
  
  describe "POST /v1/sessions" do
    before(:each) do
      post '/v1/sessions', params: { user: user_params }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "DELETE /v1/sessions/me" do
    before(:each) do
      delete '/v1/sessions/me', headers: { 'X-Auth-Token' => device_session.auth_token }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
