require "rails_helper"

describe "PATCH <%= singular_table_name %>_path" do
  subject(:request) { patch <%= singular_table_name %>_path(record), params: { <%= singular_table_name %>: <%= singular_table_name %>_params } }

  let(:<%= singular_table_name %>_params) { attributes_for(:<%= singular_table_name %>) }
  let(:user) { create(:user) }
  let(:record) { create(:<%= singular_table_name %>) }

  before do
    sign_in user
  end

  it "returns redirect status" do
    request
    expect(response).to have_http_status(:redirect)
  end

  it "updates record" do
    expect do
      request
    end.to(change { record.reload.updated_at })
  end
end
