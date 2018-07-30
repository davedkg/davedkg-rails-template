# Ideas taken from:
# https://github.com/madkins/devise_invalidatable
# https://github.com/ctide/devise_lastseenable
class Session
  include Mongoid::Document
  include Mongoid::Timestamps
  include Paranoidal
  include Chartable

  belongs_to :user
  
  field     :session_id,   type: String
  field     :last_seen_at, type: Time
  
  field     :ip_address, type: String
  validates :ip_address, presence: true

  before_create :generate_session_id
  before_create :set_last_seen_at
  
  index({ user_id: 1 })
  index({ session_id: 1 }, { unique: true })

  def stamp!
    self.update_attributes(last_seen_at: Time.now) if self.last_seen_at.to_i < (Time.now - 5.minutes).to_i
  end
  
  def agent_description
    # TODO throw exception
  end
  
  def self.deactivate(session_id)
    where(session_id: session_id).delete_all
  end
  
  private
  
  def set_last_seen_at
    self.last_seen_at = Time.now
  end
  
  def generate_session_id
    begin
      self.session_id = SecureRandom.hex(127).to_s
    end while 0 != Session.where(session_id: session_id).count
  end
  
end
