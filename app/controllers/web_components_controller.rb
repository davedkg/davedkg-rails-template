# frozen_string_literal: true

class WebComponentsController < ApplicationController
  before_action :authenticate_admin!
  skip_after_action :verify_authorized

  def index; end

  def modal
    @page_title = 'AJAX Modal'

    set_modal_size(size.to_sym) if size

    render layout: 'modal'
  end

  private

  def size
    params[:size]
  end
end
