module Entities
  class User < Entities::Object
    
    expose :email, documentation: { required: true }
    expose :first_name, documentation: { required: true }
    expose :last_name, documentation: { required: true }
    
  end
end