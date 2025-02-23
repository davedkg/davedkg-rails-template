require "rails_helper"

describe "GET <%= plural_table_name %>_path" do
  subject(:request) { get <%= plural_table_name %>_path }

  let(:user) { create(:user) }

  before do
    sign_in user
    create(:<%= singular_table_name %>)
    request
  end

  it "returns ok status" do
    expect(response).to have_http_status(:ok)
  end
end
