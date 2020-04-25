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

  validates :name, presence: true, uniqueness: { case_sensitive: false }, on: :update

  def send_invitation
    self.invitation_sent_at = Time.now
    self.deliver_invitation
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
