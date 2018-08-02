require 'rails_helper'

RSpec.describe SessionsController, type: :request do
  
  let(:user_params) { attributes_for(:user) }
  let(:user) { User.create!(user_params) }

  describe "GET new_user_session_path" do
    before(:each) do
      get new_user_session_path
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  
  describe "POST #create" do
    before(:each) do
      post user_session_path, params: { user: user_params }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
    
    # FIXME
    # it "redirects to root_path" do
    #   expect(response).to redirect_to(root_path)
    # end
  end
  
  describe "DELETE #destroy" do
    before(:each) do
      sign_in
      delete user_session_path
    end
    
    it "redirects to root_path" do
      expect(response).to redirect_to(new_user_session_path)
    end
  end

end
