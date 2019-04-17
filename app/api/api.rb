class API < Grape::API

  version 'v1', using: :path
  format :json

  do_not_route_head!

  rescue_from :all do |e|
    # if e.is_a? Grape::Exceptions::ValidationErrors
    #   Rails.logger.error "#{e.message}\n\n#{e.backtrace.join("\n")}" if Rails.env.development?
    #
    #   status  = 400
    #   message = e.errors.map {|attr_name, errors| "(#{attr_name}) #{errors.map(&:message).join(',')}" }.join(',')
    # elsif e.is_a? Mongoid::Errors::Validations
    #   Rails.logger.error "#{e.message}\n\n#{e.backtrace.join("\n")}" if Rails.env.development?
    #
    #   status  = 400
    #   message = e.document.errors.map {|attr_name, errors| "(#{attr_name}) #{errors}" }.join(',')
    # els
    if e.is_a? Mongoid::Errors::DocumentNotFound
      Rails.logger.error "#{e.message}\n\n#{e.backtrace.join("\n")}" if Rails.env.development?

      status  = 404
      message = "Not Found"
    else
      Rails.logger.error "#{e.message}\n\n#{e.backtrace.join("\n")}" if Rails.env.development?
      Raven.capture_exception e if Rails.env.production? && defined?(Raven)

      status  = 500
      message = "Internal Server Error."
    end

    Rack::Response.new({ error: { message: message, code: status } }.to_json, status, { "Content-type" => "application/json" })
  end

  helpers do

    def ip_address
      env['REMOTE_ADDR']
    end

    def authenticate_user!
      error!({ error: { message: 'Unauthorized', code: 401 } }, 401) unless current_user
    end

    def current_user
      @current_user ||= User.where(auth_token: headers['X-Auth-Token']).first
    end

    def permitted_params
      @permitted_params ||= declared(params, include_missing: false).deep_symbolize_keys
    end

    def set_raven_context
      if defined? Raven
        Raven.user_context(
          id: current_user.id.to_s,
          email: current_user.email,
          ip_address: request.ip,
        ) if current_user
        Raven.extra_context(params: params, url: request.url)
      end
    end

  end # helpers

  before do
    set_raven_context
  end

  mount Endpoints::Sessions
  mount Endpoints::User

  add_swagger_documentation api_version: 'v1',
                            hide_documentation_path: true,
                            info: { title: "Endpoints" },
                            doc_version: '1.0.0',
                            add_version: true

end