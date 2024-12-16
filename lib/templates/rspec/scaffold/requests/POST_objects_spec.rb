require "rails_helper"

describe "POST users_path" do
  subject(:request) { post users_path params: { user: user_params } }

  let(:user_params) { attributes_for(:user) }
  let(:user) { create(:user) }

  before do
    sign_in user
  end

  context "when role is user" do
    it "returns not_found status" do
      request
      expect(response).to have_http_status(:not_found)
    end
  end

  context "when role is admin" do
    let(:user) { create(:user, :admin) }

    it "returns redirect status" do
      request
      expect(response).to have_http_status(:redirect)
    end

    it "creates a user" do
      expect do
        request
      end.to change(User, :count).by(1)
    end

    # it 'sends an email' do
    #   expect do
    #     request
    #   end.to change { Devise.mailer.deliveries.size }.by(1)
    # end

    context "when email is blank" do
      before { user_params[:email] = nil }

      it "returns unprocessable_entity status" do
        request
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context "when email is invalid" do
      before { user_params[:email] = "invalid" }

      it "returns unprocessable_entity status" do
        request
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
