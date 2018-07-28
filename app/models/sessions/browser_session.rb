class Sessions::BrowserSession < Session
  
  field     :user_agent, type: String
  validates :user_agent, presence: true
  
  def agent_description
    self.user_agent
  end
  
end