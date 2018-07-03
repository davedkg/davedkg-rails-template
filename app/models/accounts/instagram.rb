class Accounts::Instagram < Account
  include ::Instagram::Hashtags 
  include ::Instagram::SignIn 
  
  field     :username, type: String
  validates :username, presence: true
  
  field     :password, type: String
  validates :password, presence: true
  
end