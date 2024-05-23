# frozen_string_literal: true

class PasswordsController < Devise::PasswordsController
  layout 'splash'

  private

  def page_title_hash
    {
      new: 'Forgot Password?',
      create: 'Forgot Password?',
      edit: 'Change Password',
      update: 'Change Password'
    }
  end
end
