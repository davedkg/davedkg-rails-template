require 'rails_helper'

RSpec.describe PasswordsController, type: :controller do
  
  before(:each) do
    sign_in_with_double nil
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

end
