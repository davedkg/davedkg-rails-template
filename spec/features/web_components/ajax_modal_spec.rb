# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'A user can view an AJAX modal', type: :feature, js: true do
  let(:user) { create(:user, :admin) }

  before do
    login_as user
    visit web_components_path
  end

  it 'A user can open and close an AJAX modal' do
    when_i_click_modal_tab
    and_click_show_ajax_modal('Show AJAX Modal')
    then_i_see_a_modal
    sleep 1
    and_then_i_click_close_modal
    then_i_cannot_see_modal
  end

  it 'A user can open and close a small AJAX modal' do
    when_i_click_modal_tab
    and_click_show_ajax_modal('Show Small AJAX Modal')
    then_i_see_a_modal
    sleep 1
    and_then_i_click_close_modal
    then_i_cannot_see_modal
  end

  it 'A user can open and close a large AJAX modal' do
    when_i_click_modal_tab
    and_click_show_ajax_modal('Show Large AJAX Modal')
    then_i_see_a_modal
    sleep 1
    and_then_i_click_close_modal
    then_i_cannot_see_modal
  end

  def when_i_click_modal_tab
    within '.nav-tabs' do
      click_on 'Modals'
    end
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
