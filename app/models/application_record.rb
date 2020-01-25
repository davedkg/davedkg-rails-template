class ApplicationRecord < ActiveRecord::Base
  include Paranoidal

  self.abstract_class = true
end
