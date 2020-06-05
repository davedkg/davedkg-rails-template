# frozen_string_literal: true

module ActionTextable
  extend ActiveSupport::Concern

  class_methods do
    # rubocop:disable Naming/PredicateName
    def has_rich_text(name, options = {})
      super(name)

      # the associated ActionText::RichText fields do not automatically get restored when the base
      # record gets restored, so we need to add that logic :(
      after_restore do
        ActionText::RichText.with_deleted.find_by(record: self, name: name)&.restore
      end

      # add a presence validation on the field when passed { required: true }
      validates(name, presence: true, unless: -> { send(name)&.body&.present? }) if options[:required]
    end
    # rubocop:enable Naming/PredicateName
  end
end
