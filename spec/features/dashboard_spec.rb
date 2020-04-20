# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Dashboard Features", type: :feature, js: true do
  let(:user) { create(:user) }

  before do
    login_as user
    visit root_path
  end

  scenario "A user can view the dashboard" do
    expect(page).to have_content("DASHBOARD")
  end

end