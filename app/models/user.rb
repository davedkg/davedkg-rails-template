class User < ApplicationRecord
  devise :database_authenticatable, :confirmable, :recoverable, :rememberable, :validatable, :invitable,
         validate_on_invite: true

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

  def send_invitation
    self.invitation_sent_at = Time.zone.now
    deliver_invitation
  end

  def accepted_invitation?
    invitation_accepted_at?
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
