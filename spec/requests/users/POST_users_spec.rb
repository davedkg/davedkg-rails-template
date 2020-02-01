require "rails_helper"

describe "POST users_path", type: :request do

  let(:admin) { create(:user) }
  let(:user_params) { attributes_for(:user) }

  before do
    sign_in admin
  end

  it "returns redirect status" do
    described_request

    expect(response).to have_http_status(:redirect)
  end

  it "creates a user" do
    expect {
      described_request
    }.to change { User.count }.by(1)
  end

  it "sends an email" do
    expect {
      described_request
    }.to change { Devise.mailer.deliveries.size }.by(1)
  end

  context "when email is blank" do
    before { user_params[:email] = nil }

    it "returns ok status" do
      described_request

      expect(response).to have_http_status(:ok)
    end
  end

  context "when email is invalid" do
    before { user_params[:email] = 'invalid' }

    it "returns ok status" do
      described_request

      expect(response).to have_http_status(:ok)
    end
  end

  def described_request
    post users_path params: { user: user_params }
  end

end