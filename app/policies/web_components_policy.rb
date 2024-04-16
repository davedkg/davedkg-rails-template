# frozen_string_literal: true

WebComponentsPolicy = Struct.new(:user, :dashboard) do
  def show?
    user.admin?
  end

  def modal?
    user.admin?
  end
end
