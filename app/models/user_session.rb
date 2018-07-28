class UserSession
  include Mongoid::Document
  include Mongoid::Timestamps
  include Paranoidal

  field :session_id, type: String
  field :ip, type: String
  field :user_agent, type: String

  belongs_to :user

  index({ user_id: 1 })
  index({ session_id: 1 }, { unique: true })

  def self.deactivate(session_id)
    where(session_id: session_id).delete_all
  end
end
