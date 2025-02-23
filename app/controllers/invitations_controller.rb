class InvitationsController < Devise::InvitationsController
  before_action :prevent_action, only: %i[new create destroy]

  layout "splash"

  private

  def page_title
    @page_title ||= "Accept Invitation"
  end
end
