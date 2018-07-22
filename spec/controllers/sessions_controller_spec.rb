require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  
  before(:each) do
    sign_in_with_double nil
  end

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

end
