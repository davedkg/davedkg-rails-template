require 'rails_helper'

describe User, type: :model do
  
  it_behaves_like 'chartable'
  it_behaves_like 'paranoidal'
  
  let(:user) { build(:user) }
  
  describe 'FactoryBot' do
    it 'builds a valid user' do
      expect(user.valid?).to be_truthy
    end
  end
  
  describe '#valid?' do
    it 'requires presence of first name' do
      user.first_name = nil
      expect(user.valid?).to be_falsey
    end
    
    it 'requires presence of last name' do
      user.last_name = nil
      expect(user.valid?).to be_falsey
    end
    
    it 'requires presence of time_zone' do
      user.time_zone = nil
      expect(user.valid?).to be_falsey
    end
  end
  
end
