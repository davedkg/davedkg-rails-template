require 'rails_helper'

RSpec.describe InvitationsController, type: :controller do
  
  before(:each) do
    sign_in_with_double nil
  end
  
  let(:token) { SecureRandom.uuid }
  
  # describe "GET #edit" do
  #   it "returns http success" do
  #     get :edit, params: { invitation_token: token }
  #     expect(response).to have_http_status(:success)
  #   end
  # end

end
