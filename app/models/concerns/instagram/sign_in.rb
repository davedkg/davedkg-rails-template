module Instagram::SignIn 
  extend ActiveSupport::Concern
  
  SIGN_IN_URL = 'https://www.instagram.com/accounts/login/'
  
  def sign_in
    # Visit Page
    status = browser.visit SIGN_IN_URL
    
    # TODO handle status
    
    # Get Sign In Form
    form = browser.find('form')
    
    # Populate username and password
    form.all('input').each do |input|
      case input['name']
      when 'username'
        input.set self.username
      when 'password'
        input.set self.password
      end
    end
    
    # Press Sign In Button
    form.click_button
    
    # TODO validate success or report error
    
    # TODO if success, save cookies
    # save_cookies
  end
  
end