# frozen_string_literal: true

require 'rails_helper'

describe User, type: :model do
  let(:user_attributes) { attributes_for(:user) }

  it_behaves_like 'paranoidal'
  it_behaves_like 'purgable'

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

    it 'returns false when avatar IS NOT of content_type image' do
      user_attributes[:avatar] = FilesSpecHelper.txt

      expect(subject).not_to be_valid
    end

    it 'returns false when email address IS NOT unique' do
      described_class.create(user_attributes)

      expect(subject).not_to be_valid
    end

    it 'returns false when avatar IS NOT of width and height equal to 200px' do
      user_attributes[:avatar] = FilesSpecHelper.png_150x150

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
