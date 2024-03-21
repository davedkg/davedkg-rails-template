# frozen_string_literal: true

module Paranoidal
  extend ActiveSupport::Concern

  included do
    acts_as_paranoid
  end
end
