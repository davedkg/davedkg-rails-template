# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WebComponentsPolicy, type: :policy do
  subject(:policy) { described_class.new(user, :web_components) }

  let(:user) { create(:user) }

  it { is_expected.to forbid_actions(%i[index]) }

  context 'when user is an admin' do
    let(:user) { create(:user, :admin) }

    it { is_expected.to permit_actions(%i[index]) }
  end
end
