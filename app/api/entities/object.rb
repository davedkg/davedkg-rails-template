module Entities
  class Object < Grape::Entity
    
    with_options(format_with: :id) do
      expose :id, documentation: { required: true }
    end
  
    format_with(:id)        { |obj| obj.to_s }
    format_with(:timestamp) { |obj| obj.to_i }
    format_with(:integer)   { |obj| obj.to_i }
    
  end
end