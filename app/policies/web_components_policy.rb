# frozen_string_literal: true

WebComponentsPolicy = Struct.new(:user, :web_components) do
  def show?
    user.admin? || Rails.env.development?
  end

  def modal?
    user.admin? || Rails.env.development?
  end
end
