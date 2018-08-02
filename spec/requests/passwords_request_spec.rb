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
  
  # FIXME
  # describe "POST #create" do
  #   before(:each) do
  #     post user_password_path, params: { user: }
  #   end
  #
  #   it "redirects to new_user_session_path" do
  #     expect(response).to redirect_to(new_user_session_path)
  #   end
  # end
  
  describe "GET edit_user_password_path" do
    before(:each) do
      get edit_user_password_path({ reset_password_token: token })
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  # FIXME
  # describe "PATCH #update" do
  #   before(:each) do
  #     patch :update
  #   end
  #
  #   it "returns http success" do
  #     expect(response).to have_http_status(:success)
  #   end
  #
  #   # FIXME
  #   # it "redirects to root_path" do
  #   #   expect(response).to redirect_to(root_path)
  #   # end
  # end

end
