require 'rails_helper'

RSpec.describe ProfileController, type: :request do
  
  let(:user_params) { attributes_for(:user, :unconfirmed) }
  
  before(:each) do
    sign_in
  end

  describe "GET profile_path" do
    before(:each) do
      get profile_path
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET edit_profile_path" do
    before(:each) do
      get edit_profile_path
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  # FIXME
  # describe "PATCH profile_path" do
  #   before(:each) do
  #     patch profile_path, params: { user: user_params }
  #   end
  #
  #   it "redirects to profile_path" do
  #     expect(response).to redirect_to(profile_path)
  #   end
  # end

end
