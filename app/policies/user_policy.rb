class UserPolicy < ApplicationPolicy

  def index?
    user.admin?
  end

  def show?
    user.admin? || user == record
  end

  def create?
    user.admin?
  end

  def update?
    user == record
  end

  def destroy?
    user.admin? && user != record
  end

  def resend_invitation?
    user.admin? && !record.invitation_accepted_at?
  end

  def permitted_attributes
    if user.admin?
      [ :email, :role ]
    else
      [:name, :time_zone]
    end
  end

end