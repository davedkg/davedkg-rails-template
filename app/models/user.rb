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

  ## Database authenticatable
  field :email,              type: String, default: ""
  field :encrypted_password, type: String, default: ""

  ## Recoverable
  field :reset_password_token,   type: String
  field :reset_password_sent_at, type: Time

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

  field     :first_name, type: String
  validates :first_name, presence: true

  field     :last_name, type: String
  validates :last_name, presence: true

  field     :time_zone, type: String, default: 'Eastern Time (US & Canada)'
  validates :time_zone, presence: true

  field     :auth_token, type: String
  validates :auth_token, presence: true, uniqueness: true

  index({ email: 1 }, { unique: true, background: true })
  index({ reset_password_token: 1 }, { background: true, unique: true })
  index({ confirmation_token: 1 }, { background: true, unique: true })
  index({ invitation_token: 1 }, { background: true, unique: true } )
  index({ auth_token: 1 }, { background: true, unique: true })

  before_validation :downcase_email
  before_create :generate_auth_token

  def name
    "#{self.first_name} #{self.last_name}" if self.first_name && self.last_name
  end

  def send_invitation
    self.invitation_sent_at = Time.now
    self.deliver_invitation
  end

  private

  def downcase_email
    self.email = self.email.downcase if self.email
  end

  def send_devise_notification(notification, *args)
    devise_mailer.send(notification, self.id.to_s, *args).deliver_later
  end

  def generate_auth_token
    begin
      self.auth_token = SecureRandom.hex(127).to_s
    end while 0 != User.where(auth_token: auth_token).count
  end

end
