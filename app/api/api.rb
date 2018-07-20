class API < Grape::API
  
  format :json

  mount V1::API
  
  add_swagger_documentation
  
end