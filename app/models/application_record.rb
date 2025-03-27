class ApplicationRecord < ActiveRecord::Base
  include Paranoidal

  self.primary_key = "uuid"

  primary_abstract_class
end
