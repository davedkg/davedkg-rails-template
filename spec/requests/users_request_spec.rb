require 'rails_helper'

RSpec.describe UsersController, type: :request do
  
  let(:user_params) { attributes_for(:user, :unconfirmed) }
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
  
  describe "POST user_path" do
    before(:each) do
      post users_path, params: { user: user_params }
    end
    
    it "redirects to users_path" do
      expect(response).to redirect_to(users_path)
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
  
  describe "delete user_path" do
    before(:each) do
      delete user_path(user)
    end
    
    it "redirects to users_path" do
      expect(response).to redirect_to(users_path)
    end
  end
  
  describe "POST resend_invitation_user_path" do
    before(:each) do
      post resend_invitation_user_path(user)
    end
    
    it "redirects to user_path" do
      expect(response).to redirect_to(users_path)
    end
  end

end
