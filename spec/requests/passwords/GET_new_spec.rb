require "rails_helper"

describe "GET new_user_password_path", type: :request do

  subject { get new_user_password_path }

  before { subject }

  it "returns ok status" do
    expect(response).to have_http_status(:ok)
  end

end
