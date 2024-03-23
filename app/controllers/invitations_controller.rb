# frozen_string_literal: true

class InvitationsController < Devise::InvitationsController
  layout 'splash'

  # rubocop:disable Rails/LexicallyScopedActionFilter
  before_action :prevent_action, only: %i[new create destroy]
  # rubocop:enable Rails/LexicallyScopedActionFilter

  private

  def page_title
    @page_title ||= 'Accept Invitation'
  end
end
