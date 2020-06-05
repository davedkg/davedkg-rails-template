# frozen_string_literal: true

class UnlocksController < Devise::UnlocksController
  layout 'splash'

  private

  def page_title_hash
    {
      new: 'Unlock Account'
    }
  end
end
