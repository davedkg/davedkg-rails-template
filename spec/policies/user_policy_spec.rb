require 'rails_helper'

describe UserPolicy do

  subject { described_class.new(user, record) }

  let(:user) { create(:user) }
  let(:record) { create(:user) }

  context 'as a user' do
    it { is_expected.to forbid_actions([ :index, :new, :create, :show, :edit, :update, :destroy, :update_password, :resend_invitation_email, :send_reset_password_email ,:unlock ]) }
    it { is_expected.to permit_mass_assignment_of_exactly([ :name, :time_zone, :password, :password_confirmation ]) }

    context "when user is me" do
      let(:record) { user }

      it { is_expected.to permit_actions([ :show, :edit, :update, :update_password ]) }
    end
  end

  context "as an admin" do
    let(:user) { create(:user, :admin) }

    it { is_expected.to permit_actions([ :index, :new, :create, :show, :destroy ]) }
    it { is_expected.to forbid_actions([ :edit, :update, :update_password ]) }
    it { is_expected.to permit_mass_assignment_of_exactly([ :email, :role ]) }

    context "when record has accepted invitation" do
      it { is_expected.to permit_actions([ :send_reset_password_email ]) }
      it { is_expected.to forbid_actions([ :resend_invitation_email, :unlock ]) }
    end

    context "when record is me" do
      let(:record) { user }

      it { is_expected.to forbid_actions([ :resend_invitation_email, :send_reset_password_email, :unlock ]) }
    end

    context "when record has not accepted invitation" do
      let(:record) { create(:user, :invitation_not_accepted) }

      it { is_expected.to permit_actions([ :resend_invitation_email ]) }
      it { is_expected.to forbid_actions([ :send_reset_password_email, :unlock ]) }
    end

    context "when record is locked" do
      let(:record) { create(:user, :locked) }

      it { is_expected.to permit_actions([ :unlock ]) }
      it { is_expected.to forbid_actions([ :resend_invitation_email, :send_reset_password_email ]) }
    end
  end

end