require 'rails_helper'

RSpec.describe PasswordsController, type: :controller do
  
  before(:each) do
    set_devise_user_mapping
  end
  
  let(:token) { SecureRandom.uuid }

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "GET #edit" do
    it "returns http success" do
      get :edit, params: { reset_password_token: token }
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "POST #create" do
    it "returns http redirect" do
      post :create
      expect(response).to have_http_status(:redirect)
    end
  end
  
  describe "PATCH #update" do
    it "returns http success" do
      patch :update
      expect(response).to have_http_status(:success)
    end
  end

end
