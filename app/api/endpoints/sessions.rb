class Endpoints::Sessions < Grape::API

  namespace :sessions do
    
    desc "Create a device session.", {
      success: { code: 201, model: Entities::Session, message: 'User was successfully authenticated.' },
      failure: [[401, 'Invalid email or password', Entities::Error]]
      }
    params do
      # requires :app_key, type: String, desc: 'app.key'
      optional :user, type: Hash do
        requires :email,      type: String, desc: 'user.email'
        requires :password,   type: String, desc: 'user.password'
      end
      # optional :device, type: Hash do
      #   requires :local_key,     type: String, desc: 'device.local_key'
      #   requires :name,          type: String, desc: 'device.name'
      #   requires :os_type,       type: String, desc: 'device.os_type'
      #   requires :os_version,    type: String, desc: 'device.os_version'
      #   requires :device_type,   type: String, desc: 'device.device_type'
      #   requires :version,       type: String, desc: 'device.version'
      #   requires :build_version, type: String, desc: 'device.build_version'
      # end
    end
    post do
      user = User.where(email: params[:user][:email].downcase).first
      
      error!({error: { message: 'Invalid email or password', code: 401 } }, 401) if nil == user || false == user.valid_password?(params[:user][:password])

      session = Session.device_session(user, ip_address)

      present :session, session, with: Entities::Session
    end
  
  end # namespace :sessions
  
end