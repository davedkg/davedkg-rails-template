# frozen_string_literal: true

class SessionsController < Devise::SessionsController
  layout 'splash'

  private

  def page_title
    @page_title ||= 'Sign In'
  end
end
