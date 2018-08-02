require 'rails_helper'

RSpec.describe ConfirmationsController, type: :request do
  
  let(:user) { create(:user) }
  
  describe "GET new_user_confirmation_path" do
    before(:each) do
      get new_user_confirmation_path({ confirmation_token: user.confirmation_token })
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  it "CERATE"
  it "SHOW"

end
