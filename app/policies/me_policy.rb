class MePolicy < ApplicationPolicy
  def show?
    me?
  end

  def edit?
    false
  end

  def update?
    me?
  end

  def update_password?
    update?
  end

  private

  def me?
    user == record
  end
end
