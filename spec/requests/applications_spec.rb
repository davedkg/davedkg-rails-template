require 'rails_helper'

RSpec.describe ApplicationsController, type: :request do
  
  let(:application_params) { attributes_for(:application) }
  let(:application) { create(:application) }

  before(:each) do
    sign_in
  end

  describe "GET applications_path" do
    before(:each) do
      get applications_path
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET new_application_path" do
    before(:each) do
      get new_application_path
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET application_path" do
    before(:each) do
      get application_path(application)
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET edit_application_path" do
    before(:each) do
      get edit_application_path(application)
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
