class User < ApplicationRecord

  # Additional: :registerable, :timeoutable, and :omniauthable
  devise :database_authenticatable, :confirmable, :invitable, :lockable,
         :recoverable, :rememberable, :trackable, :validatable,
         validate_on_invite: true

  enum role: {
    user: "user",
    admin: "admin"
  }

  attr_accessor :skip_password_validation

  validates :time_zone, presence: true
  validates :name, presence: true, uniqueness: { case_sensitive: false }, on: :update

  def send_invitation
    self.invitation_sent_at = Time.now
    self.deliver_invitation
  end

  def state
    return :invited if !invitation_accepted_at?
    return :locked  if access_locked?
    :active
  end

  ## *** Devise Overrides

  def send_devise_notification(notification, *args)
    devise_mailer.send(notification, id, *args).deliver_later
  end

  protected

  def password_required?
    return false if skip_password_validation
    super
  end

end
