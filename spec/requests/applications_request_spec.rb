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

  describe "POST applications_path" do
    before(:each) do
      post applications_path, params: { application: application_params }
    end

    it 'redirects_to application_path' do
      expect(response).to redirect_to(application_path(assigns(:application)))
    end
    
    it 'creates an application' do
      expect(Application.count).to eq(1)
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

  describe "PATCH #update" do
    before(:each) do
      patch application_path(application), params: { application: application_params }
    end

    it 'redirects_to application_path' do
      expect(response).to redirect_to(application_path(assigns(:application)))
    end
  end

end
