require 'rails_helper'

RSpec.describe ConfirmationsController, type: :request do
  
  let(:user) { create(:user) }
  
  describe "GET new_user_confirmation_path" do
    before(:each) do
      get new_user_confirmation_path#({ confirmation_token: user.confirmation_token })
    end
    
    it "redirects to root_path" do
      expect(response).to redirect_to(root_path)
    end
  end
  
  describe "POST user_confirmation_path" do
    before(:each) do
      post user_confirmation_path
    end
    
    it "redirects to root_path" do
      expect(response).to redirect_to(root_path)
    end
  end
  
  describe "GET user_confirmation_path" do
    before(:each) do
      get user_confirmation_path, params: { confirmation_token: user.confirmation_token }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
