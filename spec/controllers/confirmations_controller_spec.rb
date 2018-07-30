require 'rails_helper'

RSpec.describe ConfirmationsController, type: :controller do
  
  let(:user) { create(:user) }
  
  before(:each) do
    sign_in_with_user nil
  end
  
  describe "GET #show" do
    before(:each) do
      get :show, params: { confirmation_token: user.confirmation_token }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
