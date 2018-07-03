module Devisable 
  extend ActiveSupport::Concern
  
  included do 
    # Include default devise modules. Others available are:
    # :lockable, :timeoutable and :omniauthable
    devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :trackable, :validatable, 
           :confirmable, :invitable

    ## Database authenticatable
    field :email,              type: String, default: ""
    field :encrypted_password, type: String, default: ""
  
    index({ email: 1 }, { unique: true, background: true })
    before_validation :downcase_email

    ## Recoverable
    field :reset_password_token,   type: String
    field :reset_password_sent_at, type: Time
  
    index({ reset_password_token: 1 }, { background: true })

    ## Rememberable
    field :remember_created_at, type: Time

    ## Trackable
    field :sign_in_count,      type: Integer, default: 0
    field :current_sign_in_at, type: Time
    field :last_sign_in_at,    type: Time
    field :current_sign_in_ip, type: String
    field :last_sign_in_ip,    type: String

    # Confirmable
    field :confirmation_token,   type: String
    field :confirmed_at,         type: Time
    field :confirmation_sent_at, type: Time
    field :unconfirmed_email,    type: String # Only if using reconfirmable
  
    index({ confirmation_token: 1 }, { background: true })

    ## Lockable
    # field :failed_attempts, type: Integer, default: 0 # Only if lock strategy is :failed_attempts
    # field :unlock_token,    type: String # Only if unlock strategy is :email or :both
    # field :locked_at,       type: Time
    # index({ unlock_token: 1 }, { background: true })
  
    # Invitable
    belongs_to :invited_by, polymorphic: true, optional: true
    has_many :invitations, class_name: 'User', as: :invited_by
  
    field :invitation_token, type: String
    field :invitation_created_at, type: Time
    field :invitation_sent_at, type: Time
    field :invitation_accepted_at, type: Time
    field :invitation_limit, type: Integer
  
    index( {invitation_token: 1}, {:background => true} )
    index( {invitation_by_id: 1}, {:background => true} )
  end
  
  def downcase_email
    self.email = self.email.downcase if self.email
  end
  
  def send_devise_notification(notification, *args)
    devise_mailer.send(notification, self.id.to_s, *args).deliver_later
  end
  
end