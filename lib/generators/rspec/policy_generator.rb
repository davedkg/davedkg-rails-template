if Rails.env.test?
  class Generators::Rspec::Scaffold::PolicyGenerator; end
else
  module Rspec
    module Generators
      class PolicyGenerator < ::Rails::Generators::NamedBase
        source_root File.expand_path("templates", __dir__)

        argument :attributes, type: :array, default: [], banner: "field:type field:type"

        def create_policy_spec
          template "policy_spec.rb.tt", File.join("spec/policies", class_path, "#{file_name}_policy_spec.rb")
        end
      end
    end
  end
end
