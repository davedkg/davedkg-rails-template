require "rails_helper"

describe ApplicationPolicy do

  let(:user) { create(:user) }
  let(:record) { user }

  subject { described_class.new(user, record) }

  context "as a user" do
    it { is_expected.to forbid_actions(%i[index show new create edit update destroy]) }
  end
end