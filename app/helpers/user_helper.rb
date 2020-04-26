module UserHelper

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