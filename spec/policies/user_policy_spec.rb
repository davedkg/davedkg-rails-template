require 'rails_helper'

describe UserPolicy do
  subject { described_class.new(user, other_user) }

  let(:user) { create(:user) }
  let(:other_user) { user }

  context 'as a user' do
    it { is_expected.to forbid_actions([ :index, :new, :create, :show, :edit, :update, :destroy, :resend_invitation ]) }
  end

  context "as an admin" do
    let(:user) { create(:user, :admin) }

    it { is_expected.to permit_actions([ :index, :new, :create, :destroy, :resend_invitation ]) }
    it { is_expected.to forbid_actions([ :show, :edit, :update ]) }
  end

end