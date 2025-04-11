# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'A user can view an modal', type: :feature, js: true do
  SIZE_BUTTONS = [ "Small", "Default", "Large", "Extra Large" ]

  let(:user) { create(:user, :admin) }

  before do
    login_as user
    visit web_components_path
  end

  SIZE_BUTTONS.each do |size_button|
    it "A user can open and close an Remove Modal of size #{size_button}" do
      when_i_click_modal_tab
      and_click_show_ajax_modal(size_button)
      then_i_see_a_modal
      sleep 1
      and_then_i_click_close_modal
      then_i_cannot_see_modal
    end
  end

  def when_i_click_modal_tab
    find('#modals-tab').click
  end

  def and_click_show_ajax_modal(button_text)
    click_on button_text
  end

  def then_i_see_a_modal
    expect(page).to have_selector '.modal'
  end

  def and_then_i_click_close_modal
    within '.modal' do
      click_on 'Close'
    end
  end

  def then_i_cannot_see_modal
    expect(page).not_to have_selector '.modal'
  end
end
