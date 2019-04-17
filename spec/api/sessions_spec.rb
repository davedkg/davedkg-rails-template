require 'rails_helper'

RSpec.describe Endpoints::Sessions do

  let(:user_params) { attributes_for(:user) }
  let!(:user) { User.create(user_params) }

  describe "POST /v1/sessions" do
    before(:each) do
      post '/v1/sessions', params: { user: user_params }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
