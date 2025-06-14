class UserPolicy < ApplicationPolicy
  def index?
    admin?
  end

  def show?
    admin?
  end

  def create?
    admin?
  end

  def destroy?
    admin? && !me?
  end

  def resend_invitation_email?
    admin? && !me? && !accepted_invitation?
  end

  def send_reset_password_email?
    admin? && !me? && accepted_invitation?
  end

  def enable?
    admin? && !me? && disabled?
  end

  def disable?
    admin? && !me? && enabled? && accepted_invitation?
  end

  def permitted_attributes
    if admin? && !me?
      %i[email role]
    else
      %i[name time_zone password password_confirmation current_password]
    end
  end

  class Scope < Scope
    def resolve
      if admin?
        scope
      else
        scope.where(id: user.id)
      end
    end
  end

  private

  def me?
    user == record
  end

  def accepted_invitation?
    record.accepted_invitation?
  end

  def enabled?
    record.enabled?
  end

  def disabled?
    record.disabled?
  end
end
