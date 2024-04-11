# frozen_string_literal: true

module UsersHelper
  def user_status_badge(user)
    if !user.accepted_invitation?
      content_tag(:span, 'invited', class: %w[badge text-bg-secondary])
    elsif user.locked?
      content_tag(:span, 'locked', class: %w[badge text-bg-danger])
    elsif user.disabled?
      content_tag(:span, 'disabled', class: %w[badge text-bg-danger])
    else
      content_tag(:span, 'active', class: %w[badge text-bg-success])
    end
  end

  def user_name(user)
    user.name || user.email
  end
end
