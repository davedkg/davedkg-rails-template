module Analyzable 
  extend ActiveSupport::Concern
  
  module ClassMethods
  
    def totals_by_month(num_months=12)
      last_date  = Time.now.end_of_month
      first_date = last_date - (num_months.months - 1)
      match      = { '$match' => { created_at: { '$gte' => first_date } } }
      project    = { "$project" => { "month" => { "$month" => "$created_at" } } }
      group      = { "$group" => { "_id" => "$month", "total" => { "$sum" => 1 } } }
      
      results = {}
      self.collection.aggregate([ match, project, group ]).each do |result|
        results[result['_id']] = result['total']
      end
      
      data    = []
      current = first_date
      while current < last_date
        data << (results.key?(current.month) ? results[current.month] : 0)
        current += 1.month
      end

      data
    end
  
  end
  
end