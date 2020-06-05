# frozen_string_literal: true

Rails.configuration.to_prepare do
  ActiveStorage::Attachment.include Paranoidal
end
