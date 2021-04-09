# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Dashboard Features', type: :feature, js: true do
  subject { visit root_path }

  let(:user) { create(:user) }

  before do
    login_as user
  end

  Capybara::Window::CAPYBARA_WINDOW_SIZES.each do |window_size|
    context "when window size is #{window_size}" do
      before do
        page.current_window.resize_to_preset(window_size)
        subject
      end

      it 'A user can view the dashboard' do
        expect(page).to have_content('DASHBOARD')
      end
    end
  end
end
