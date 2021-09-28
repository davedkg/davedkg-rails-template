require 'rails_helper'

<% module_namespacing do -%>
RSpec.describe <%= class_name %>, <%= type_metatag(:model) %> do
  let(:<%= class_name.underscore %>_attributes) { attributes_for(:<%= class_name.underscore %>) }

  it_behaves_like 'paranoidal'
  it_behaves_like 'purgable'
end
<% end -%>