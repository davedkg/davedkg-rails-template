class User < ApplicationRecord
  devise :database_authenticatable, :confirmable, :recoverable, :rememberable, :validatable, :invitable,
         validate_on_invite: true, create_resource_on_invitation: true

  enum :role, {
    user: "user",
    admin: "admin"
  }

  enum :state, {
    enabled: "enabled",
    disabled: "disabled"
  }

  attr_accessor :skip_password_validation

  validates :name,      presence: true, on: :update
  validates :time_zone, presence: true, time_zone: true

  def accepted_invitation?
    accepted_or_not_invited?
  end

  ## *** Devise Overrides

  def send_devise_notification(notification, *)
    devise_mailer.send(notification, id, *).deliver_later
  end

  def active_for_authentication?
    super && enabled?
  end

  protected

  def password_required?
    return false if skip_password_validation

    super
  end
end
