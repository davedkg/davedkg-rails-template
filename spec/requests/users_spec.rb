require 'rails_helper'

RSpec.describe UsersController, type: :request do
  
  let(:user) { create(:user) }
  
  before(:each) do
    sign_in
  end

  describe "GET users_path" do
    before(:each) do
      get users_path
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET new_user_path" do
    before(:each) do
      get new_user_path
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "GET user_path" do
    before(:each) do
      get user_path(user)
    end
  
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
