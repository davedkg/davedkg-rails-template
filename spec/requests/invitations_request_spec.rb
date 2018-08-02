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
  
  # FIXME
  # # we don't want to expose this endpoint
  # describe "POST #create" do
  #   before(:each) do
  #     post :create, params: { user: user_params }
  #   end
  #
  #   it "redirects to root_path" do
  #     expect(response).to redirect_to(new_user_session_path)
  #   end
  # end
  
  describe "GET accept_user_invitation_path" do
    before(:each) do
      get accept_user_invitation_path({ invitation_token: user.invitation_token })
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  # describe "PATCH #update" do
  #   before(:each) do
  #     patch :update, params: { user: user_params }
  #   end
  #
  #   it 'returns http success' do
  #     expect(response).to have_http_status(:success)
  #   end
  #
  #   # FIXME
  #   # it "redirects to root_path" do
  #   #   expect(response).to redirect_to(root_path)
  #   # end
  # end
  #
  # describe "DELETE #delete" do
  #   before(:each) do
  #     delete :destroy
  #   end
  #
  #   it "redirects to root_path" do
  #     expect(response).to redirect_to(new_user_session_path)
  #   end
  # end

end
