module UserHelper

  def user_avatar_url(user, size=200)
    if user.avatar.attached?
      url_for(user.avatar.variant(resize_to_limit: [size, size]))
    else
      image_url("profile-100x100.png")
    end
  end

  def user_status_badge(user)
    case (user.state)
    when :invited
      content_tag(:span, "invited", class: ["badge", "badge-secondary"])
    when :active
      content_tag(:span, "active", class: ["badge", "badge-success"])
    when :locked
      content_tag(:span, "locked", class: ["badge", "badge-danger"])
    end
  end

  def user_name(user)
    user.name || user.email
  end

  def user_member_since(user)
    if user.invitation_accepted_at
      user.invitation_accepted_at.strftime("%B %Y")
    else
      'n/a'
    end
  end

end