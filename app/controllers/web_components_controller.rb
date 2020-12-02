# frozen_string_literal: true

class WebComponentsController < ApplicationController
  before_action :authenticate_admin!
  skip_after_action :verify_authorized

  def index; end

  def modal
    @page_title = 'AJAX Modal'

    render layout: 'modal'
  end
end
