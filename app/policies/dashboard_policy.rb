DashboardPolicy = Struct.new(:user, :dashboard) do
  def show?
    true
  end
end
