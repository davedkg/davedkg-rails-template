GrapeSwaggerRails.options.url                = '/v1/swagger_doc.json'
GrapeSwaggerRails.options.app_name           = 'API Explorer | ' + APP_TITLE
GrapeSwaggerRails.options.hide_api_key_input = true
GrapeSwaggerRails.options.hide_url_input     = true
GrapeSwaggerRails.options.doc_expansion      = 'list'

GrapeSwaggerRails.options.before_action do
  GrapeSwaggerRails.options.app_url = request.protocol + request.host_with_port
  redirect_to '/' if nil == current_user
end