class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include Devisable
  include Paranoidal

  field :first_name, type: String
  validates :first_name, presence: true
  
  field :last_name, type: String
  validates :last_name, presence: true

  def name
    "#{self.first_name} #{self.last_name}" if self.first_name && self.last_name
  end
  
  def send_invitation
    self.invitation_sent_at = Time.now
    self.deliver_invitation
  end

end
