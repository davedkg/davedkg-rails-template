require 'rails_helper'

RSpec.describe DashboardPolicy, type: :policy do
  subject(:policy) { described_class.new(user, :dashboard) }

  let(:user) { create(:user) }

  it { is_expected.to permit_actions(%i[show]) }
end
