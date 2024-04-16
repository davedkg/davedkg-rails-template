# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'A user can view an remote modal', :js do
  let(:user) { create(:user, :admin) }

  before do
    login_as user
    visit web_components_path
  end

  it 'A user can open and close an modal' do
    when_i_click_modal_tab
    and_click_show_ajax_modal('Default')
    then_i_see_a_modal
    sleep 1
    and_then_i_click_close_modal
    then_i_cannot_see_modal
  end

  it 'A user can open and close a small modal' do
    when_i_click_modal_tab
    and_click_show_ajax_modal('Small')
    then_i_see_a_modal
    sleep 1
    and_then_i_click_close_modal
    then_i_cannot_see_modal
  end

  it 'A user can open and close a large modal' do
    when_i_click_modal_tab
    and_click_show_ajax_modal('Large')
    then_i_see_a_modal
    sleep 1
    and_then_i_click_close_modal
    then_i_cannot_see_modal
  end

  it 'A user can open and close a XL modal' do
    when_i_click_modal_tab
    and_click_show_ajax_modal('Extra Large')
    then_i_see_a_modal
    sleep 1
    and_then_i_click_close_modal
    then_i_cannot_see_modal
  end

  def when_i_click_modal_tab
    within '.nav-tabs' do
      click_on 'Remote Modals'
    end
  end

  def and_click_show_ajax_modal(button_text)
    click_on button_text
  end

  def then_i_see_a_modal
    expect(page).to have_css '.modal'
  end

  def and_then_i_click_close_modal
    within '.modal' do
      click_on 'Close'
    end
  end

  def then_i_cannot_see_modal
    expect(page).not_to have_css '.modal'
  end
end
