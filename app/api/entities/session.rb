module Entities
  class Session < Grape::Entity
    
    expose :auth_token, documentation: { type: "String", required: true }
    expose :user, with: Entities::User, documentation: { required: true }

  end
end