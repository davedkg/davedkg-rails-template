require "rails_helper"

describe ApplicationPolicy do
  subject { described_class.new(user, record) }

  let(:user) { create(:user) }
  let!(:record) { create(:user) }

  context "as a user" do
    it { is_expected.to forbid_actions(%i[index show new create edit update destroy]) }
  end
end