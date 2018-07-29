require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  
  let(:user_params) { build(:user) }
  let(:user) { create(:user) }
  
  before(:each) do
    set_devise_user_mapping
  end

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "POST #create" do
    it "returns http redirect" do
      post :create, params: { user: { email: user_params[:email], password: user_params[:password] } }
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "DELETE #destroy" do
    it "returns http redirect" do
      sign_in_with_user(user)
      delete :destroy
      expect(response).to have_http_status(:redirect)
    end
  end

end
