# frozen_string_literal: true

module Utils
  module Json
    def render_json(partial, locals)
      ActiveSupport::JSON.decode(
        ApplicationController.renderer.render(
          partial: partial,
          locals: locals
        )
      )
    end
  end
end
