require 'rails_helper'

RSpec.describe InvitationsController, type: :controller do
  
  let(:user_params) { attributes_for(:user, :unconfirmed) }
  let(:user) { User.invite!(email: user_params[:email]) }
  
  before(:each) do
    set_devise_user_mapping
  end
  
  describe "GET #new" do
    it "returns http redirect" do
      get :new
      expect(response).to have_http_status(:redirect)
    end
  end
  
  describe "GET #edit" do
    it "returns http success" do
      get :edit, params: { invitation_token: user.invitation_token }
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
    it 'returns http success' do
      patch :update, params: { user: user_params }
      expect(response).to have_http_status(:success)
    end
  end

  describe "DELETE #delete" do
    it "returns http redirect" do
      delete :destroy
      expect(response).to have_http_status(:redirect)
    end
  end

end
