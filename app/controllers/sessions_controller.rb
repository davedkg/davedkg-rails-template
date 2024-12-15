class SessionsController < Devise::SessionsController
  private

  def page_title
    @page_title ||= "Sign In"
  end
end
