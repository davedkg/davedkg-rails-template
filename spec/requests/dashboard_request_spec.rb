require 'rails_helper'

RSpec.describe DashboardController, type: :request do
  
  before(:each) do
    sign_in
  end

  describe "GET root_path" do
    before(:each) do
      get root_path
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
