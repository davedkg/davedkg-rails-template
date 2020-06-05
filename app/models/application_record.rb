# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  include ActionTextable
  include Paranoidal
  include Purgable

  self.abstract_class = true

  def self.rows_count
    c = 0

    ApplicationRecord.descendants.each do |model|
      c += model.unscoped.count
    end

    c
  end
end
