require 'rails_helper'

RSpec.describe PasswordsController, type: :request do
  
  let(:token) { SecureRandom.uuid }

  describe "GET new_user_password_path" do
    before(:each) do
      get new_user_password_path
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "GET edit_user_password_path" do
    before(:each) do
      get edit_user_password_path({ reset_password_token: token })
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
