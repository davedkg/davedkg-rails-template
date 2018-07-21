class V1::API < Grape::API

  version 'v1', using: :path
  format :json

  do_not_route_head!

  rescue_from :all do |e|
    if e.is_a? Grape::Exceptions::ValidationErrors
      Rails.logger.error "#{e.message}\n\n#{e.backtrace.join("\n")}" if Rails.env.development?

      status  = 400
      message = e.errors.map {|attr_name, errors| "(#{attr_name}) #{errors.map(&:message).join(',')}" }.join(',')
    elsif e.is_a? Mongoid::Errors::Validations
      Rails.logger.error "#{e.message}\n\n#{e.backtrace.join("\n")}" if Rails.env.development?

      status  = 400
      message = e.document.errors.map {|attr_name, errors| "(#{attr_name}) #{errors}" }.join(',')
    elsif e.is_a? Mongoid::Errors::DocumentNotFound
      Rails.logger.error "#{e.message}\n\n#{e.backtrace.join("\n")}" if Rails.env.development?

      status  = 404
      message = "Not Found"
    else
      Rails.logger.error "#{e.message}\n\n#{e.backtrace.join("\n")}" if Rails.env.development?
      Raven.capture_exception e if Rails.env.production? && defined?(Raven)

      status  = 500
      message = "Internal server error."
    end

    Rack::Response.new({ error: message }.to_json, status, { "Content-type" => "application/json" })
  end
  
  helpers do
    
    # def current_device
    #   @current_device ||= Device.where(auth_token: headers['X-Auth-Token']).first
    # end
    #
    # def authenticate_device!
    #   error!('401 Unauthorized', 401) unless current_device
    # end
    #
    # def current_user
    #   @current_user ||= current_device.user
    # end
    
    # def set_raven_context
    #   if defined? Raven
    #     Raven.user_context(user_id: current_user.id.to_s)  if current_device && current_user
    #     Raven.user_context(user_email: current_user.email) if current_device && current_user
    #     Raven.extra_context(params: params.to_unsafe_h, url: request.url) # FIXME filter params
    #   end
    # end
    
  end # helpers
  
  # before do
  #   set_raven_context
  # end

  add_swagger_documentation api_version: 'v1',
                            hide_documentation_path: true,
                            info: { title: "Endpoints" },
                            doc_version: '1.0.0',
                            add_version: true,
                            base_path: "#{ Rails.env.production? ? 'https' : 'http' }//#{ENV['APP_DOMAIN']}/api/v1",
                            add_base_path: true,
                            models: [
                              # TheApi::Entities::UseResponse,
                              # TheApi::Entities::ApiError
                            ]

end