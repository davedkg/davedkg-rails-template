# frozen_string_literal: true

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

  def update_password?
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

  def enable?
    admin? && !me? && disabled?
  end

  def disable?
    admin? && !me? && enabled?
  end

  def permitted_attributes
    if admin? && !me?
      %i[email role]
    else
      %i[name time_zone password password_confirmation]
    end
  end

  class Scope < Scope
    def resolve
      if user.admin?
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

  def admin?
    user.admin?
  end

  def accepted_invitation?
    record.accepted_invitation?
  end

  def locked?
    record.locked?
  end

  def enabled?
    record.enabled?
  end

  def disabled?
    record.disabled?
  end
end
