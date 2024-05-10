class ApplicationRecord < ActiveRecord::Base
  include Paranoidal

  primary_abstract_class
end
