# frozen_string_literal: true

DashboardPolicy = Struct.new(:user, :dashboard) do
  def show?
    true
  end
end
