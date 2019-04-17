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

      session = Session.new(user)

      present :session, session, with: Entities::Session
    end

  end # namespace :sessions

end