class Application
  include Mongoid::Document
  include Mongoid::Timestamps
  include Paranoidal
  
  field     :name, type: String
  validates :name, presence: true
  
  field :lname, type: String
  field :key,   type: String
  
  before_create :set_key
  before_save   :set_lname
  
  index({ key: 1 }, { background: true, unique: true })
  
  private
  
  def set_key
    begin
      self.key = SecureRandom.hex(16)
    end while 0 != Application.where(key: key).count
  end
  
  def set_lname
    self.lname = self.name.downcase
  end
  
end
