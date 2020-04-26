require "rails_helper"

describe "POST users_path", type: :request do

  subject { post users_path params: { user: user_params } }

  let(:user_params) { attributes_for(:user) }
  let(:user) { create(:user) }

  before do
    sign_in user
  end

  context "as a user" do
    it "returns not_found status" do
      subject
      expect(response).to have_http_status(:not_found)
    end
  end

  context "as an admin" do
    let(:user) { create(:user, :admin) }

    it "returns redirect status" do
      subject
      expect(response).to have_http_status(:redirect)
    end

    it "creates a user" do
      expect {
        subject
      }.to change { User.count }.by(1)
    end

    it "sends an email" do
      expect {
        subject
      }.to change { Devise.mailer.deliveries.size }.by(1)
    end

    context "when email is blank" do
      before { user_params[:email] = nil }

      it "returns ok status" do
        subject
        expect(response).to have_http_status(:ok)
      end
    end

    context "when email is invalid" do
      before { user_params[:email] = 'invalid' }

      it "returns ok status" do
        subject
        expect(response).to have_http_status(:ok)
      end
    end
  end

end