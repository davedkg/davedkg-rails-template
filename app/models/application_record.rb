class ApplicationRecord < ActiveRecord::Base
  include ActionTextable
  include Paranoidal
  include Purgable

  self.abstract_class = true

end
