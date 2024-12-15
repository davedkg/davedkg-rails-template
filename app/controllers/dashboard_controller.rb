class DashboardController < ApplicationController
  def show
    authorize :dashboard, :show?
  end
end
