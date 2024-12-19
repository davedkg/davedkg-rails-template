require "rails_helper"

describe "GET new_<%= singular_table_name %>_path" do
  subject(:request) { get new_<%= singular_table_name %>_path }

  let(:user) { create(:user) }

  before do
    sign_in user
    request
  end

  it "returns ok status" do
    expect(response).to have_http_status(:ok)
  end
end
