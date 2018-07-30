module ControllerHelpers

  def set_devise_mapping
    request.env['devise.mapping'] = Devise.mappings[:user]
  end

  def sign_in_with_user(user = build('user'))
    set_devise_mapping
    if user.nil?
      allow(request.env['warden']).to receive(:authenticate!).and_throw(:warden, {:scope => :user})
      allow(controller).to receive(:current_user).and_return(nil)
    else
      allow(request.env['warden']).to receive(:authenticate!).and_return(user)
      allow(controller).to receive(:current_user).and_return(user)
    end
  end
  
end