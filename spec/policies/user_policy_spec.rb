require 'rails_helper'

describe UserPolicy do

  let(:user) { create(:user) }
  let(:record) { create(:user) }

  subject { described_class.new(user, record) }

  context 'as a user' do
    it { is_expected.to forbid_actions([ :index, :new, :create, :show, :edit, :update, :destroy, :resend_invitation_email, :send_reset_password_email ,:unlock ]) }
    it { is_expected.to permit_mass_assignment_of_exactly([ :name, :time_zone ]) }

    context "when user is me" do
      let(:record) { user }

      it { is_expected.to permit_actions([ :show, :edit, :update ]) }
    end
  end

  context "as an admin" do
    let(:user) { create(:user, :admin) }

    it { is_expected.to permit_actions([ :index, :new, :create, :show, :destroy ]) }
    it { is_expected.to forbid_actions([ :edit, :update ]) }
    it { is_expected.to permit_mass_assignment_of_exactly([ :email, :role ]) }

    context "when user has accepted invitation" do
      it { is_expected.to permit_actions([ :send_reset_password_email ]) }
      it { is_expected.to forbid_actions([ :resend_invitation_email, :unlock ]) }
    end

    context "when user is me" do
      let(:record) { user }

      it { is_expected.to forbid_actions([ :resend_invitation_email, :send_reset_password_email, :unlock ]) }
    end

    context "when user has not accepted invitation" do
      let(:record) { create(:user, :invitation_not_accepted) }

      it { is_expected.to permit_actions([ :resend_invitation_email ]) }
      it { is_expected.to forbid_actions([ :send_reset_password_email, :unlock ]) }
    end

    context "when user is locked" do
      let(:record) { create(:user, :locked) }

      it { is_expected.to permit_actions([ :unlock ]) }
      it { is_expected.to forbid_actions([ :resend_invitation_email, :send_reset_password_email ]) }
    end
  end

end