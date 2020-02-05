Rails.configuration.to_prepare do
  ActiveStorage::Attachment.send :include, Paranoidal
end