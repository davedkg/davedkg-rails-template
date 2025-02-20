class MePolicy < ApplicationPolicy
  def show?
    me?
  end

  def update?
    me?
  end

  def update_password?
    me?
  end

  def permitted_attributes
    %i[name time_zone password password_confirmation]
  end

  private

  def me?
    record == user
  end
end
