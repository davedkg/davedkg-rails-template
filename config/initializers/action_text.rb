# frozen_string_literal: true

Rails.configuration.to_prepare do
  ActionText::RichText.include Paranoidal
end
