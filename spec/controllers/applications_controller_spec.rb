require 'rails_helper'

RSpec.describe ApplicationsController, type: :controller do
  
  let(:application_params) { attributes_for(:application) }
  let(:application) { create(:application) }

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

  describe "GET #new" do
    before(:each) do
      get :new
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "POST #create" do
    before(:each) do
      get :create, params: { application: application_params }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:redirect)
    end
    
    it 'redirects_to application_path' do
      expect(response).to redirect_to(application_path(assigns(:application)))
    end
  end

  describe "GET #show" do
    before(:each) do
      get :show, params: { id: application.id }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #edit" do
    before(:each) do
      get :edit, params: { id: application.id }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end
  
  describe "PATCH #update" do
    before(:each) do
      get :update, params: { id: application.id, application: application_params }
    end
    
    it "returns http success" do
      expect(response).to have_http_status(:redirect)
    end
    
    it 'redirects_to application_path' do
      expect(response).to redirect_to(application_path(assigns(:application)))
    end
  end

end
