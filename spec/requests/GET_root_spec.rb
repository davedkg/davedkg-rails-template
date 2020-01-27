require "rails_helper"

describe "GET new_user_session_path", type: :request do

  let(:user) { create(:user) }

  before do
    sign_in user
    get root_path
  end

  it "returns ok status" do
    expect(response).to have_http_status(:ok)
  end
end