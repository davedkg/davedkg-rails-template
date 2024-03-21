# frozen_string_literal: true

class InvitationsController < Devise::InvitationsController
  layout 'splash'

  before_action :prevent_action, only: %i[new create destroy]

  private

  def page_title
    @page_title ||= 'Accept Invitation'
  end
end
