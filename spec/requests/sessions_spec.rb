require 'rails_helper'

RSpec.describe SessionsController, type: :request do

  describe "GET new_user_session_path" do
    before(:each) do
      get new_user_session_path
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
