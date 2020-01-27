require "rails_helper"

describe "DELETE user_path", type: :request do

  let(:admin) { create(:user) }
  let(:user) { create(:user) }

  before do
    sign_in admin
  end

  it "returns redirect status" do
    described_request

    expect(response).to have_http_status(:redirect)
  end

  it "deletes the user" do
    expect {
      described_request
    }.to change{ user.reload.deleted_at }
  end

  def described_request
    delete user_path(user)
  end

end