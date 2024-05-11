# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Dashboard Features', :js do
  let(:user) { create(:user) }

  before do
    login_as user
  end

  Capybara::Window::CAPYBARA_WINDOW_SIZES.each do |window_size|
    context "when window size is #{window_size}" do
      before do
        page.current_window.resize_to_preset(window_size)
        visit dashboard_path
      end

      it 'A user can view the dashboard' do
        expect(page).to have_content('Dashboard')
      end
    end
  end
end
