# frozen_string_literal: true

class WebComponentsController < ApplicationController
  def show
    authorize :web_components, :show?
  end
end
