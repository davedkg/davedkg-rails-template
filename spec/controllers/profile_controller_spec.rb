require 'rails_helper'

RSpec.describe ProfileController, type: :controller do
  
  let(:user_params) { build(:user) }
  
  before(:each) do
    sign_in_with_user
  end

  describe "GET #show" do
    it "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #edit" do
    it "returns http success" do
      get :edit
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "PATCH #update" do
    it "returns http redirect" do
      patch :update, params: { user: { first_name: user_params[:first_name] } }
      expect(response).to have_http_status(:redirect)
    end
  end

end
