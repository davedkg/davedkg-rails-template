WebComponentsPolicy = Struct.new(:user, :web_components) do
  def show?
    user.admin?
  end

  def modal?
    user.admin?
  end
end
