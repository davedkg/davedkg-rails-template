class MeController < ApplicationController
  before_action :set_me

  def show
  end

  def update
    if @me.update(permitted_attributes(@me))
      flash.now[:notice] = "Update was successful."
    end
  end

  def update_password
    if @me.update_with_password(permitted_attributes(@me))
      bypass_sign_in(@me)
      flash.now[:notice] = "Password was successfully updated."
    end
  end

  private

  def set_me
    @me = authorize current_user
  end

  def page_title_hash
    super.merge({
                  show: "Profile"
                })
  end
end
