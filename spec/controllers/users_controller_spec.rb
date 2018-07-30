require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  
  let(:user_params) { attributes_for(:user, :unconfirmed) }
  let(:user) { create(:user) }
  
  before(:each) do
    sign_in_with_user
  end

  describe "GET #index" do
    before(:each) do
      get :index
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #new" do
    before(:each) do
      get :new
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "POST #create" do
    before(:each) do
      post :create, params: { user: user_params }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:redirect)
    end
    
    it "redirects to users_path" do
      expect(response).to redirect_to(users_path)
    end
  end
  
  describe "GET #show" do
    before(:each) do
      get :show, params: { id: user.id }
    end
  
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "delete #destroy" do
    before(:each) do
      get :destroy, params: { id: user.id }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:redirect)
    end
    
    it "redirects to users_path" do
      expect(response).to redirect_to(users_path)
    end
  end
  
  describe "POST #resend_invitation" do
    before(:each) do
      post :resend_invitation, params: { id: user.id }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:redirect)
    end
    
    it "redirects to user_path" do
      expect(response).to redirect_to(users_path)
    end
  end

end
