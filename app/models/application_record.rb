class ApplicationRecord < ActiveRecord::Base
  include Paranoidal

  self.abstract_class = true

  def self.has_rich_text(name, options = {}) # rubocop:disable Naming/PredicateName
    super(name)

    # the associated ActionText::RichText fields do not automatically get restored when the base
    # record gets restored, so we need to add that logic :(
    after_restore do
      ActionText::RichText.with_deleted.find_by(record: self, name: name)&.restore
    end

    # add a presence validation on the field when passed { required: true }
    validates(name, presence: true, unless: -> { send(name)&.body&.present? }) if options[:required]
  end
end
