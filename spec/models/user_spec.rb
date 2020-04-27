require "rails_helper"

describe User do

  it_behaves_like "paranoidal"
  it_behaves_like "purgable"

  let(:user_attributes) { attributes_for(:user) }

  describe "#valid?" do
    it "returns false when email is missing" do
      user_attributes.delete(:email)

      expect(User.new(user_attributes).valid?).to be(false)
    end

    context "when updating user" do
      let!(:user) { create(:user) }

      it "returns false when name is missing" do
        user_attributes[:name] = nil

        user.update(user_attributes)

        expect(user.valid?).to be(false)
      end
    end
  end

  describe "#create" do
    it "DOES NOT create two users with the same email address" do
      User.create(user_attributes)
      User.create(user_attributes)

      expect(User.count).to eq(1)
    end
  end

  # FIXME
  # describe "#send_invitation" do
  #   it "sends an invitationm email"
  #   it "sets invitation_sent_at"
  # end

end