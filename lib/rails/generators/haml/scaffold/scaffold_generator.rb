require "rails/generators/erb/scaffold/scaffold_generator"

module Haml
  module Generators
    class ScaffoldGenerator < Erb::Generators::ScaffoldGenerator
      source_root File.expand_path("templates", __dir__)

      def copy_view_files
        available_views.each do |view|
          filename = filename_with_extensions(view)
          template "#{view}.html.haml", File.join("app/views", controller_file_path, filename)
        end

        available_turbo_stream_views.each do |view|
          filename = filename_with_extensions(view, "turbo_stream")
          template "#{view}.turbo_stream.haml", File.join("app/views", controller_file_path, filename)
        end
      end

      hook_for :form_builder, as: :scaffold

      def copy_form_file
        return unless options[:form_builder].nil?

        filename = filename_with_extensions("_form")
        template "_form.html.haml", File.join("app/views", controller_file_path, filename)
      end

      protected

      def available_views
        %w[index edit show new _paginator _table_rows]
      end

      def available_turbo_stream_views
        %w[index]
      end

      def handler
        :haml
      end
    end
  end
end
