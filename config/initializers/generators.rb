Rails.application.configure do
  config.generators do |g|
    g.assets false
    g.scaffold_stylesheet false
    g.helper false
    g.jbuilder false
    g.controller_specs false
    g.helper_specs false
    g.routing_specs false
    g.view_specs false
    g.orm :active_record, primary_key_type: :uuid
  end
end
