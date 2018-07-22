module Analyzable 
  extend ActiveSupport::Concern
  
  module ClassMethods
  
    def totals_by_month(num_months=12)
      [ 0,0,0,0,0,1 ]
     #  db.transaction.aggregate([
     #     { "$project": {
     #         "nominal": 1,
     #         "month": { "$month": "$timestamp" }
     #     }},
     #     { "$group": {
     #         "_id": "$month",
     #         "total": { "$sum": "$nominal" }
     #     }}
     # ])
     #
     # match = {
     #
     # }
     #
     # project = {
     #
     # }
     #
     # group = {
     #
     # }
     #
     # sort = {
     #
     # }
     #
     #  results = self.collection.aggregate([ match, project, group, sort ])
    end
  
  end
  
end