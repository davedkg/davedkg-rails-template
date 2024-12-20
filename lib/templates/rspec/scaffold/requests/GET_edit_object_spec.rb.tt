require "rails_helper"

describe "GET edit_<%= singular_table_name %>_path" do
  subject(:request) { get edit_<%= singular_table_name %>_path(record) }

  let(:user) { create(:user) }
  let(:record) { create(:<%= singular_table_name %>) }

  before do
    sign_in user
    request
  end

  it "returns ok status" do
    expect(response).to have_http_status(:ok)
  end
end
