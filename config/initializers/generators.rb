Rails.application.configure do
  config.generators do |g|
    g.orm :mongoid
    g.assets false
    g.view_specs false
    g.helper_specs false
    g.controller_specs false
  end

  def self.load_generators(*)
    super
    require 'rails/generators/rails/controller/controller_generator'
    Rails::Generators::ControllerGenerator.class_eval do
      remove_hook_for :test_framework
      hook_for :test_framework, as: :request
    end
  end
end