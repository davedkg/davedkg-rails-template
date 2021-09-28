# frozen_string_literal: true

class RequestSpecsGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('templates', __dir__)

  def copy_request_specs
    template 'DELETE_object_spec.rb', File.join('spec/requests', plural_name, "DELETE_#{plural_name.singularize}_spec.rb")
    template 'GET_edit_object_spec.rb', File.join('spec/requests', plural_name, "GET_edit_#{plural_name.singularize}_spec.rb")
    template 'GET_new_object_spec.rb', File.join('spec/requests', plural_name, "GET_new_#{plural_name.singularize}_spec.rb")
    template 'GET_object_spec.rb', File.join('spec/requests', plural_name, "GET_#{plural_name.singularize}_spec.rb")
    template 'GET_objects_spec.rb', File.join('spec/requests', plural_name, "GET_#{plural_name}_spec.rb")
    template 'PATCH_object_spec.rb', File.join('spec/requests', plural_name, "PATCH_#{plural_name.singularize}_spec.rb")
    template 'POST_objects_spec.rb', File.join('spec/requests', plural_name, "POST_#{plural_name}_spec.rb")
  end
end
