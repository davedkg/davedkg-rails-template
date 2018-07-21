require 'rails_helper'

describe User, type: :model do
  describe '#valid?' do
    it 'requires a first name'
    it 'requires a last name'
  end
end
