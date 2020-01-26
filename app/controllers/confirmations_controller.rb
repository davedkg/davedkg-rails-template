class ConfirmationsController < Devise::ConfirmationsController

  layout "splash"

  private

  def page_title
    @page_title ||= "Resend Confirmation Email"
  end

end