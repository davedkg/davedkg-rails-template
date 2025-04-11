require 'rails_helper'

describe ApplicationPolicy do
  subject(:policy) { described_class.new(user, record) }

  let(:user) { create(:user) }
  let(:record) { user }

  context 'when role is user' do
    it { is_expected.to forbid_actions(%i[index show new create edit update destroy]) }
  end

  describe "Scope" do
    subject(:scope) { ApplicationPolicy::Scope.new(user, record).resolve }

    it 'raises NoMethodError' do
      expect { scope }.to raise_error(NoMethodError)
    end
  end
end
