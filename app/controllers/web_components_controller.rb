# frozen_string_literal: true

class WebComponentsController < ApplicationController
  before_action :authenticate_admin!
  skip_after_action :verify_authorized

  def index; end

  def modal
    @page_title = 'AJAX Modal'
    set_modal_size(params[:size].to_sym) if params[:size]

    render layout: 'modal'
  end
end
