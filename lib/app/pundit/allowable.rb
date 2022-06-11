# frozen_string_literal: true

require 'pundit/allowable/authorization'

module Pundit
  module Allowable
    def self.included(base)
      ActiveSupport::Deprecation.warn <<~WARNING.strip_heredoc
        'include Pundit' is deprecated. Please use 'include Pundit::Authorization' instead.
      WARNING
      base.include Authorization
    end
  end
end
