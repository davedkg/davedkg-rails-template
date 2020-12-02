# frozen_string_literal: true

module ModalHelper
  def modal_size_class(modal_size)
    case modal_size
    when :large
      'modal-lg'
    when :small
      'modal-sm'
    end
  end
end
