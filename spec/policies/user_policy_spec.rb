require 'rails_helper'

describe UserPolicy, type: :policy do
  subject(:policy) { described_class.new(user, record) }

  let(:user) { create(:user) }
  let(:record) { create(:user) }

  it { is_expected.to permit_mass_assignment_of(%i[]) }

  context 'when role is admin' do
    let(:user) { create(:user, :admin) }

    it { is_expected.to permit_mass_assignment_of(%i[email role]) }

    context 'when record has accepted invitation' do
      it { is_expected.to permit_actions([ :send_reset_password_email ]) }
      it { is_expected.to forbid_actions(%i[resend_invitation_email]) }
    end

    context 'when record is me' do
      let(:record) { user }

      it { is_expected.to forbid_actions(%i[resend_invitation_email send_reset_password_email]) }
      it { is_expected.to permit_mass_assignment_of(%i[name time_zone password password_confirmation current_password]) }
    end

    context 'when record has not accepted invitation' do
      let(:record) { create(:user, :invitation_not_accepted) }

      it { is_expected.to permit_actions([ :resend_invitation_email ]) }
      it { is_expected.to forbid_actions(%i[send_reset_password_email disable]) }
    end

    context 'when record is disabled' do
      let(:record) { create(:user, :disabled) }

      it { is_expected.to permit_actions(%i[enable]) }
      it { is_expected.to forbid_actions(%i[disable]) }
    end

    context 'when record is enabled' do
      it { is_expected.to permit_actions(%i[disable]) }
      it { is_expected.to forbid_actions(%i[enable]) }
    end
  end

  describe "Scope" do
    subject(:scope) { UserPolicy::Scope.new(user, User).resolve }

    before do
      create(:user)
    end

    it 'returns 1 user' do
      expect(scope.count).to eq(1)
    end

    context 'when user is admin' do
      let(:user) { create(:user, :admin) }

      it 'returns 2 users' do
        expect(scope.count).to eq(2)
      end
    end
  end
end
