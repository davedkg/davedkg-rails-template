class Endpoints::User < Grape::API

  namespace :user do

    desc "Create a session.", {
      headers: { "X-Auth-Token" => { description: "session.auth_token", required: true } },
      success: { code: 200, model: Entities::User },
    }
    get do
      present :user, current_user, with: Entities::User
    end

  end # namespace :user

end