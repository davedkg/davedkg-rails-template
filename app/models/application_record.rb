# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  include ActionTextable
  include Paranoidal
  include Purgable

  self.abstract_class = true

  def self.rows_count
    count = 0

    ApplicationRecord.descendants.each do |model|
      count += model.unscoped.count
    end

    count
  end
end
