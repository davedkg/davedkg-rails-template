require "rails_helper"

# http://localhost:3000/unlock?unlock_token=ibBuQ3yhgMS3766mu_s6&utm_campaign=user.unlock_instructions&utm_medium=email&utm_source=dkg-template

describe "GET new_user_unlock_path", type: :request do
  before { get new_user_unlock_path }

  it "returns ok status" do
    expect(response).to have_http_status(:ok)
  end
end
