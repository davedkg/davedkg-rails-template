# frozen_string_literal: true

WebComponentsPolicy = Struct.new(:user, :dashboard) do
  def show?
    true
  end
end
