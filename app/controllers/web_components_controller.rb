# frozen_string_literal: true

class WebComponentsController < ApplicationController
  def index
    authorize :web_components, :index?
  end
end
