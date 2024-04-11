# frozen_string_literal: true

module UsersHelper
  def user_status_badge(user)
    if !user.accepted_invitation?
      content_tag(:span, 'invited', class: %w[badge bg-secondary-subtle text-secondary])
    elsif user.locked?
      content_tag(:span, 'locked', class: %w[badge bg-danger-subtle text-danger])
    elsif user.disabled?
      content_tag(:span, 'disabled', class: %w[badge bg-danger-subtle text-danger])
    else
      content_tag(:span, 'active', class: %w[badge bg-success-subtle text-success])
    end
  end

  def user_name(user)
    user.name || user.email
  end
end
