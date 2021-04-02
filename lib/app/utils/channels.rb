# frozen_string_literal: true

module Utils
  module Channels
    def broadcast(channels, payload)
      server = ActionCable.server

      if channels.is_a?(Array)
        channels.each { |channel| server.broadcast(channel, payload) }
      else
        server.broadcast(channels, payload)
      end
    end
  end
end
