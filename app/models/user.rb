# frozen_string_literal: true

class User < ApplicationRecord
  devise :database_authenticatable, :confirmable, :invitable, :lockable,
         :recoverable, :rememberable, :trackable, :validatable,
         validate_on_invite: true

  enum role: {
    user: 'user',
    admin: 'admin'
  }

  enum state: {
    enabled: 'enabled',
    disabled: 'disabled'
  }

  attr_accessor :skip_password_validation

  has_one_attached :avatar

  validates :name,      presence: true, uniqueness: { case_sensitive: false }, on: :update
  validates :time_zone, presence: true, time_zone: true
  validates :avatar,    dimension: { width: 200, height: 200 }, content_type: %r{\Aimage/.*\z}

  def send_invitation
    self.invitation_sent_at = Time.zone.now
    deliver_invitation
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

  def active_for_authentication?
    super && enabled?
  end

  protected

  def password_required?
    return false if skip_password_validation

    super
  end
end
