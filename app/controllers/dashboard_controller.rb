class DashboardController < ApplicationController

  skip_after_action  :verify_authorized

  breadcrumb "Dashboard", :root_path

  def show
  end
end
