class InvitationsController < Devise::InvitationsController
  before_action :render_page_not_found, only: %i[new create destroy]

  layout "splash"

  private

  def page_title
    @page_title ||= "Accept Invitation"
  end
end
