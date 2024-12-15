class WebComponentsController < ApplicationController
  def show
    authorize :web_components, :show?
  end

  def modal
    authorize :web_components, :modal?

    @page_title = 'Modal'

    set_modal_size(size.to_sym) if size

    render layout: 'modal'
  end

  private

  def size
    params[:size]
  end
end
