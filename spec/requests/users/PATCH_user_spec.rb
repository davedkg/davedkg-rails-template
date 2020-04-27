require "rails_helper"

describe "PATCH user_path", type: :request do

  subject { patch user_path(record), params: { user: user_params } }

  let(:user_params) { attributes_for(:user) }
  let(:user) { create(:user) }
  let(:record) { create(:user) }

  before do
    sign_in user
  end

  context "as a user" do
    it "returns not_found status" do
      subject
      expect(response).to have_http_status(:not_found)
    end

    context "when record is me" do
      let(:record) { user }

      it "returns redirect status" do
        subject
        expect(response).to have_http_status(:redirect)
      end

      it "updates record" do
        expect {
          subject
        }.to change { record.reload.updated_at }
      end
    end
  end

  context "as an admin" do
    let(:user) { create(:user, :admin) }

    it "returns not_found status" do
      subject
      expect(response).to have_http_status(:not_found)
    end
  end

end