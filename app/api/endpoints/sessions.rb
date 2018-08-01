class Endpoints::Sessions < Grape::API

  namespace :sessions do
    
    desc "Create a session.", {
      success: { code: 201, model: Entities::Session, message: 'Session was successfully created.' },
      failure: [[401, 'Invalid email or password', Entities::Error]]
    }
    params do
      optional :user, type: Hash do
        requires :email,      type: String, desc: 'user.email'
        requires :password,   type: String, desc: 'user.password'
      end
    end
    post do
      user = User.where(email: params[:user][:email].downcase).first
      
      error!({error: { message: 'Invalid email or password', code: 401 } }, 401) if nil == user || false == user.valid_password?(params[:user][:password])

      session = Session.device_session(user, ip_address)

      present :session, session, with: Entities::Session
    end
    
    desc "Destroy current session.", {
      headers: { "X-Auth-Token" => { description: "session.auth_token", required: true } },    
      success: { code: 204, message: 'Session was successfully destroyed.' }
    }
    delete :me do
      authenticate_session!
      
      current_session.destroy
      
      body false
    end
  
  end # namespace :sessions
  
end