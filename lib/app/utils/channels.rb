# frozen_string_literal: true

module Utils
  module Channels
    def broadcast(channels, payload)
      if channels.is_a?(Array)
        channels.each { |channel| ActionCable.server.broadcast(channel, payload) }
      else
        ActionCable.server.broadcast(channels, payload)
      end
    end
  end
end
