require "rails_helper"

describe "DELETE <%= singular_table_name %>_path" do
  subject(:request) { delete <%= singular_table_name %>_path(record) }

  let(:user) { create(:user) }
  let(:record) { create(:<%= singular_table_name %>) }

  before do
    sign_in user
  end

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
