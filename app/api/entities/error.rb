module Entities
  class Error < Grape::Entity
    
    expose :message, documentation: { type: "String", required: true }
    expose :code, documentation: { type: "Integer", required: true }
    
  end
end