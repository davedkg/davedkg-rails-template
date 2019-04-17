class Session

  attr_accessor :user

  def initialize(user)
    @user = user
  end

  def auth_token
    @user.auth_token
  end

end