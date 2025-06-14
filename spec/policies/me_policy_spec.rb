require 'rails_helper'

RSpec.describe MePolicy, type: :policy do
  subject(:policy) { described_class.new(user, record) }

  let(:user) { create(:user) }
  let(:record) { create(:user) }

  it { is_expected.to forbid_actions(%i[index new create show edit update destroy]) }

  context 'when record is me' do
    let(:record) { user }

    it { is_expected.to permit_actions(%i[show update update_password]) }
  end
end
