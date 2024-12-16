require "rails_helper"

describe "POST <%= plural_table_name %>_path" do
  subject(:request) { post <%= plural_table_name %>_path params: { <%= singular_table_name %>: <%= singular_table_name %>_params } }

  let(:<%= singular_table_name %>_params) { attributes_for(:<%= singular_table_name %>) }
  let(:user) { create(:user) }

  before do
    sign_in user
  end

  it "returns redirect status" do
    request
    expect(response).to have_http_status(:redirect)
  end

  it "creates a record" do
    expect do
      request
    end.to change(<%= class_name %>, :count).by(1)
  end
end
