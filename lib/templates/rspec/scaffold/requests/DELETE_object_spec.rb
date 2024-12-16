require "rails_helper"

describe "DELETE user_path" do
  subject(:request) { delete user_path(record) }

  let(:user) { create(:user) }
  let(:record) { create(:user) }

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

    it "deletes the record" do
      expect do
        request
      end.to(change { record.reload.deleted_at })
    end
  end
end
