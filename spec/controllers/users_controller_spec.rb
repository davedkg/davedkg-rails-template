require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  
  let(:user_params) { attributes_for(:user, :unconfirmed) }
  let(:user) { create(:user) }
  
  before(:each) do
    sign_in_with_double
  end

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "POST #create" do
    it "returns http success" do
      post :create, params: { user: user_params }
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "GET #show" do
    it "returns http success" do
      get :show, params: { id: user.id }
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "delete #destroy" do
    it "returns http success" do
      get :destroy, params: { id: user.id }
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "POST #resend_invitation" do
    it "returns http success" do
      post :resend_invitation, params: { id: user.id }
      expect(response).to have_http_status(:success)
    end
  end

end
