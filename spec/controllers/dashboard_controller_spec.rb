require 'rails_helper'

RSpec.describe DashboardController, type: :controller do
  
  before(:each) do
    sign_in_with_user
  end

  describe "GET #index" do
    before(:each) do
      get :index
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
