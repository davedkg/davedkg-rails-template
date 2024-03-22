# frozen_string_literal: true

require 'rails_helper'

describe ApplicationPolicy do
  subject { described_class.new(user, record) }

  let(:user) { create(:user) }
  let(:record) { user }

  context 'when role is user' do
    it { is_expected.to forbid_actions(%i[index show new create edit update destroy]) }
  end
end
