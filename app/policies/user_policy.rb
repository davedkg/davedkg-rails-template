class UserPolicy < ApplicationPolicy

  def index?
    true
  end

  def create?
    true
  end

  def new?
    true
  end

  def destroy?
    true
  end

  def resend_invitation?
    true
  end

end