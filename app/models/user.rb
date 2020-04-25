class User < ApplicationRecord

  # Additional: :registerable, :timeoutable, and :omniauthable
  devise :database_authenticatable, :confirmable, :invitable, :lockable,
         :recoverable, :rememberable, :trackable, :validatable

  enum role: {
    user: "user",
    admin: "admin"
  }

  validates :name, presence: true, uniqueness: { case_sensitive: false }

  def valid_invitation?
    false == self.id.blank?
  end

  def send_invitation
    self.invitation_sent_at = Time.now
    self.deliver_invitation
  end

  ## *** Devise Overrides

  def send_devise_notification(notification, *args)
    devise_mailer.send(notification, id, *args).deliver_later
  end

end
