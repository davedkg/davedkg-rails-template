class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include Chartable
  include Paranoidal

  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable, :registerable,
  devise :database_authenticatable, :validatable,
         :recoverable, :rememberable, :trackable,
         :confirmable, :invitable, :zxcvbnable

  has_many :sessions, dependent: :destroy

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
  # index( {invitation_by_id: 1}, {:background => true} )

  field     :first_name, type: String
  validates :first_name, presence: true

  field     :last_name, type: String
  validates :last_name, presence: true

  field     :time_zone, type: String, default: 'Eastern Time (US & Canada)'
  validates :time_zone, presence: true

  def name
    "#{self.first_name} #{self.last_name}" if self.first_name && self.last_name
  end

  def send_invitation
    self.invitation_sent_at = Time.now
    self.deliver_invitation
  end

  def activate_session(options = {})
    new_session = Sessions::BrowserSession.new(options.merge(user: self))
    new_session.save
    new_session.auth_token
  end

  # def stamp_session!(session_id)
  #   session = sessions.where(session_id: session_id).first
  #   session.stamp!
  # end

  def session_active?(auth_token)
    sessions.where(auth_token: auth_token).exists?
  end

  private

  def downcase_email
    self.email = self.email.downcase if self.email
  end

  def send_devise_notification(notification, *args)
    devise_mailer.send(notification, self.id.to_s, *args).deliver_later
  end

end
