if ENV["SENTRY_DSN"] && defined?(Sentry)
  require "active_support/parameter_filter"

  Sentry.init do |config|
    config.dsn                = ENV["SENTRY_DSN"]
    config.traces_sample_rate = 0.0
    config.breadcrumbs_logger = [ :active_support_logger, :http_logger ]
    config.release            = ENV["HEROKU_RELEASE_VERSION"] if ENV["HEROKU_RELEASE_VERSION"]

    # Filter Params
    filter = ActiveSupport::ParameterFilter.new(Rails.application.config.filter_parameters)
    config.before_send = lambda do |event, _hint|
      if event.extra
        event.extra = filter.filter(event.extra)
      end
      if event.user
        event.user = filter.filter(event.user)
      end
      if event.contexts
        event.contexts = filter.filter(event.contexts)
      end
      if event.request&.data
        event.request.data = filter.filter(event.request.data)
      end
      event
    end
  end
end
