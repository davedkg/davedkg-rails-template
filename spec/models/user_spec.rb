require "rails_helper"

describe User do

  it_behaves_like "paranoidal"
  it_behaves_like "purgable"

  let(:user_attributes) { attributes_for(:user) }

  describe "#valid?" do
    subject { User.new(user_attributes) }

    it "returns false when email is missing" do
      user_attributes.delete(:email)

      expect(subject).not_to be_valid
    end

    it "requires avatar of content_type image" do
      user_attributes[:avatar] = FilesSpecHelper.txt

      expect(subject).not_to be_valid
    end

    it "requires a unique email address" do
      User.create(user_attributes)

      expect(subject).not_to be_valid
    end

    it "requires avatar with width and height equal to 200px" do
      user_attributes[:avatar] = FilesSpecHelper.png_150x150

      expect(subject).not_to be_valid
    end

    context "when updating user" do
      subject { create(:user) }

      it "returns false when name is blank" do
        user_attributes[:name] = ""
        subject.attributes     = user_attributes

        expect(subject).not_to be_valid
      end
    end
  end

end