if Rails.env.test?
  class Generators::Pundit::Policy::PolicyGenerator; end
else
  module Pundit
    module Generators
      class PolicyGenerator < ::Rails::Generators::NamedBase
        source_root File.expand_path("templates", __dir__)

        argument :attributes, type: :array, default: [], banner: "field:type field:type"

        def create_policy
          template "policy.rb.tt", File.join("app/policies", class_path, "#{file_name}_policy.rb")
        end

        hook_for :test_framework
      end
    end
  end
end
