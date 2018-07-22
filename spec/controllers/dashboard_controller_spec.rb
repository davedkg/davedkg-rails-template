require 'rails_helper'

RSpec.describe DashboardController, type: :controller do
  
  before(:each) do
    sign_in_with_double
  end

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

end
