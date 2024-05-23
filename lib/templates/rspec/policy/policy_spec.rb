require '<%= File.exist?('spec/rails_helper.rb') ? 'rails_helper' : 'spec_helper' %>'

RSpec.describe <%= class_name %>Policy, type: :policy do
  subject(:policy) { described_class.new(user, record) }

  let(:user) { create(:user) }
  let(:record) { create(:<%= class_name.underscore %>) }

  it { is_expected.to permit_actions(%i[index show new create edit update destroy]) }
  it { expect(policy).to permit_mass_assignment_of([])}
end