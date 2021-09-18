# frozen_string_literal: true

module UserHelper
  def user_avatar_url(user, size = 150)
    avatar = user.avatar

    if avatar.attached?
      url_for(avatar.variant(resize_to_limit: [size, size]))
    else
      image_url('profile-256x256.png')
    end
  end

  def user_status_badge(user)
    if !user.accepted_invitation?
      content_tag(:span, 'invited', class: %w[badge badge-secondary])
    elsif user.locked?
      content_tag(:span, 'locked', class: %w[badge badge-danger])
    elsif user.disabled?
      content_tag(:span, 'disabled', class: %w[badge badge-danger])
    else
      content_tag(:span, 'active', class: %w[badge badge-success])
    end
  end

  def user_name(user)
    user.name || user.email
  end
end
