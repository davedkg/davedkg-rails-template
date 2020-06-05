# frozen_string_literal: true

module Purgable
  extend ActiveSupport::Concern

  included do
    scope :purgable, -> { unscope(where: :deleted_at).where('deleted_at < ?', Time.zone.now - 30.days) }
  end

  class_methods do
    def purge_deleted_records
      ApplicationRecord.descendants.each do |model|
        model.purgable.destroy_all
      end
    end
  end
end
