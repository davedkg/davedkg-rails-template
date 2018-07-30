require 'rails_helper'

RSpec.describe PasswordsController, type: :controller do
  
  before(:each) do
    sign_in_with_user nil
  end
  
  let(:token) { SecureRandom.uuid }

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
      post :create
    end
    
    it "redirects to new_user_session_path" do
      expect(response).to redirect_to(new_user_session_path)
    end
  end
  
  describe "GET #edit" do
    before(:each) do
      get :edit, params: { reset_password_token: token }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "PATCH #update" do
    before(:each) do
      patch :update
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
    
    # FIXME
    # it "redirects to root_path" do
    #   expect(response).to redirect_to(root_path)
    # end
  end

end
