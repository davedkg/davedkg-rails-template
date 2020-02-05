class UserPolicy < ApplicationPolicy

  def index?
    user.admin?
  end

  def create?
    user.admin?
  end

  def destroy?
    user.admin?
  end

  def resend_invitation?
    user.admin?
  end

end