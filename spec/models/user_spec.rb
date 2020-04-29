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

    it "requires avatar of content_type image" do
      user_attributes[:avatar] = FilesSpecHelper.txt

      expect(User.new(user_attributes)).not_to be_valid
    end

    it "requires avatar with width and height equal to 200px" do
      user_attributes[:avatar] = FilesSpecHelper.png_150x150

      expect(User.new(user_attributes)).not_to be_valid
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