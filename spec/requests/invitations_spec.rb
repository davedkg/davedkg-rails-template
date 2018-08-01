require 'rails_helper'

RSpec.describe InvitationsController, type: :controller do
  
  let(:user_params) { attributes_for(:user, :unconfirmed) }
  let(:user) { User.invite!(email: user_params[:email]) }
  
  # we don't want to expose this endpoint
  describe "GET new_user_invitation_path" do
    before(:each) do
      get new_user_invitation_path
    end
    
    it "redirects to new_user_session_path" do
      expect(response).to redirect_to(new_user_session_path)
    end
  end
  
  describe "GET accept_user_invitation_path" do
    before(:each) do
      get accept_user_invitation_path({ invitation_token: user.invitation_token })
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
