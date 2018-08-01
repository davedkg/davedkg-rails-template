require 'rails_helper'

RSpec.describe ProfileController, type: :request do
  
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

end
