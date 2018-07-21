class API < Grape::API
  
  format :json

  mount V1::API
  
end