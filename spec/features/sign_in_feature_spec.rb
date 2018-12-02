require "rails_helper"

feature "SignIn", js: true do

  let(:user) { create(:user) }

  scenario "A user can view the sign in page." do
    visit new_user_session_path
  end

end