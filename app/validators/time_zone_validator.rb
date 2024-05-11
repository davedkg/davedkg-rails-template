# frozen_string_literal: true

class TimeZoneValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    record.errors.add(attribute, 'is not a valid timezone') if ActiveSupport::TimeZone[value].blank?
  end
end
