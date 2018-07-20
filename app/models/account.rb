class Account
  include Mongoid::Document
  include Mongoid::Timestamps
  include Paranoidal
  
  # field :cookies, type: Hash, default: {}
  
  def browser
    @browser ||= Capybara.current_session
  end
  
  # def save_cookies
  #   self.cookies = {}
  #
  #   self.browser.driver.cookies.each do |cookie|
  #     self.cookies[cookie[0]] = cookie[1].value
  #   end
  #
  #   self.save
  # end
  
end
