# frozen_string_literal: true

require 'rails_helper'

describe UserPolicy, type: :policy do
  subject { described_class.new(user, record) }

  let(:user) { create(:user) }
  let(:record) { create(:user) }

  context 'when role is user' do
    it { is_expected.to forbid_actions(%i[index new create show edit update destroy]) }
    it { is_expected.to forbid_actions(%i[update_password update_avatar]) }
    it { is_expected.to forbid_actions(%i[resend_invitation_email send_reset_password_email unlock enable disable]) }
    it { is_expected.to permit_mass_assignment_of_exactly(%i[name time_zone password password_confirmation avatar]) }

    context 'when record is me' do
      let(:record) { user }

      it { is_expected.to permit_actions(%i[show edit update update_password update_avatar]) }
    end
  end

  context 'when role is admin' do
    let(:user) { create(:user, :admin) }

    it { is_expected.to permit_actions(%i[index new create show destroy]) }
    it { is_expected.to forbid_actions(%i[edit update update_password update_avatar]) }
    it { is_expected.to permit_mass_assignment_of_exactly(%i[email role]) }

    context 'when record has accepted invitation' do
      it { is_expected.to permit_actions([:send_reset_password_email]) }
      it { is_expected.to forbid_actions(%i[resend_invitation_email unlock]) }
    end

    context 'when record is me' do
      let(:record) { user }

      it { is_expected.to forbid_actions(%i[resend_invitation_email send_reset_password_email unlock]) }
    end

    context 'when record has not accepted invitation' do
      let(:record) { create(:user, :invitation_not_accepted) }

      it { is_expected.to permit_actions([:resend_invitation_email]) }
      it { is_expected.to forbid_actions(%i[send_reset_password_email unlock]) }
    end

    context 'when record is locked' do
      let(:record) { create(:user, :locked) }

      it { is_expected.to permit_actions([:unlock]) }
      it { is_expected.to forbid_actions(%i[resend_invitation_email send_reset_password_email]) }
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
end
