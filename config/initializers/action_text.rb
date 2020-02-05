Rails.configuration.to_prepare do
  ActionText::RichText.send :include, Paranoidal
end