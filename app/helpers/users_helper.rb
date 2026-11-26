module UsersHelper
  def user_status_badge(user)
    if !user.accepted_or_not_invited?
      content_tag(:span, "invited", class: %w[badge bg-subtle-secondary fg-info])
    elsif user.disabled?
      content_tag(:span, "disabled", class: %w[badge bg-subtle-danger fg-danger])
    else
      content_tag(:span, "active", class: %w[badge bg-subtle-success fg-success])
    end
  end

  def user_name(user)
    user.name || user.email
  end
end
