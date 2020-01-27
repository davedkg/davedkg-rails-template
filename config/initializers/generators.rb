Rails.application.configure do
  config.generators do |g|
    g.assets false
    g.helper false
    g.scaffold_stylesheet false
    g.helper_specs false
    g.controller_specs false
    g.view_specs false
  end
end