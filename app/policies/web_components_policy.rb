class WebComponentsPolicy < ApplicationPolicy
  def show?
    admin?
  end

  def modal?
    admin?
  end

  private

  def admin?
    user.admin?
  end
end
