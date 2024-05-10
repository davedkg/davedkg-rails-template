# frozen_string_literal: true

require 'rails_helper'

describe User, type: :model do
  let(:user_attributes) { attributes_for(:user) }

  it_behaves_like 'paranoidal'

  describe '#valid?' do
    subject { described_class.new(user_attributes) }

    it 'returns false when email is missing' do
      user_attributes.delete(:email)

      expect(subject).not_to be_valid
    end

    it 'returns false when time_zone is invalid' do
      user_attributes[:time_zone] = 'INVALID_TIMEZONE'

      expect(subject).not_to be_valid
    end

    it 'returns false when email address IS NOT unique' do
      described_class.create(user_attributes)

      expect(subject).not_to be_valid
    end

    context 'when updating user' do
      subject { create(:user) }

      it 'returns false when name is blank' do
        user_attributes[:name] = ''
        subject.attributes     = user_attributes

        expect(subject).not_to be_valid
      end
    end
  end
end