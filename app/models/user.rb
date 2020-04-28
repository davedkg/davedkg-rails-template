class User < ApplicationRecord

  devise :database_authenticatable, :confirmable, :invitable, :lockable,
         :recoverable, :rememberable, :trackable, :validatable,
         validate_on_invite: true

  enum role: {
    user: "user",
    admin: "admin"
  }

  attr_accessor :skip_password_validation

  has_one_attached :avatar

  validates :time_zone, presence: true
  validates :name, presence: true, uniqueness: { case_sensitive: false }, on: :update

  def send_invitation
    self.invitation_sent_at = Time.now
    self.deliver_invitation
  end

  ## *** States

  def state
    return :invited if !accepted_invitation?
    return :locked  if locked?
    :active
  end

  def accepted_invitation?
    invitation_accepted_at?
  end

  def locked?
    access_locked?
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
