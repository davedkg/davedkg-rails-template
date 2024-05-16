# frozen_string_literal: true

WebComponentsPolicy = Struct.new(:user, :web_components) do
  def index?
    user.admin? || Rails.env.development?
  end
end
