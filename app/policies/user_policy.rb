class UserPolicy < ApplicationPolicy

  def index?
    admin?
  end

  def show?
    admin? || me?
  end

  def create?
    admin?
  end

  def update?
    me?
  end

  def destroy?
    admin? && !me?
  end

  def resend_invitation_email?
    admin? && !me? && !accepted_invitation?
  end

  def send_reset_password_email?
    admin? && !me? && accepted_invitation? && !locked?
  end

  def unlock?
    admin? && !me? && accepted_invitation? && locked?
  end

  def permitted_attributes
    if admin?
      [ :email, :role ]
    else
      [ :name, :time_zone ]
    end
  end

  private

  def me?
    user == record
  end

  def admin?
    user.admin?
  end

  def accepted_invitation?
    record.accepted_invitation?
  end

  def locked?
    record.locked?
  end

end