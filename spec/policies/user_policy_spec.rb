require 'rails_helper'

describe UserPolicy do
  subject { described_class.new(user, other_user) }

  let(:user) { create(:user) }
  let(:other_user) { create(:user) }

  context 'as a user' do
    it { is_expected.to forbid_actions([ :index, :new, :create, :show, :edit, :update, :destroy, :resend_invitation ]) }
    it { is_expected.to permit_mass_assignment_of_exactly([ :name, :time_zone ]) }

    context "when user equals current_user" do
      let(:other_user) { user }

      it { is_expected.to permit_actions([ :show, :edit, :update ]) }
    end
  end

  context "as an admin" do
    let(:user) { create(:user, :admin) }

    it { is_expected.to permit_actions([ :index, :new, :create, :show, :destroy ]) }
    it { is_expected.to forbid_actions([ :edit, :update, :resend_invitation ]) }
    it { is_expected.to permit_mass_assignment_of_exactly([ :email, :role ]) }

    context "when user equals current_user" do
      let(:other_user) { user }

      it { is_expected.to forbid_actions([ :resend_invitation ]) }
    end

    context "when user has not accepted invitation" do
      let(:other_user) { create(:user, :unconfirmed) }

      it { is_expected.to permit_actions([ :resend_invitation ]) }
    end
  end

end