class Sessions::BrowserSession < Session
  
  field     :user_agent, type: String
  validates :user_agent, presence: true
  
  def description
    self.user_agent
  end
  
end