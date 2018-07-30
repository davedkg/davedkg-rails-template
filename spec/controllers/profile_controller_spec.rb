require 'rails_helper'

RSpec.describe ProfileController, type: :controller do
  
  let(:user_params) { attributes_for(:user, :unconfirmed) }
  
  before(:each) do
    sign_in_with_user
  end

  describe "GET #show" do
    before(:each) do
      get :show
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #edit" do
    before(:each) do
      get :edit
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "PATCH #update" do
    before(:each) do
      patch :update, params: { user: user_params }
    end
    
    it "returns http redirect" do
      expect(response).to have_http_status(:redirect)
    end
    
    it "redirects to profile_path" do
      expect(response).to redirect_to(profile_path)
    end
  end

end
