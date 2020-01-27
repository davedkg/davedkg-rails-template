require "rails_helper"

describe DeviseMailer, type: :mailer do
  let(:user) { create(:user) }
  let(:token) { SecureRandom.uuid }

  describe "#reset_password_instructions" do
    let(:mailer) { DeviseMailer.reset_password_instructions(user.id, token) }

    it "sends to user's email" do
      expect(mailer.to).to contain_exactly(user.email)
    end

    # TODO
    # it "contains edit_user_password_path" do
    #   expect(mailer.body).to match(edit_user_password_path(reset_password_token: token))
    # end
  end

  describe "#invitation_instructions" do
    let(:mailer) { DeviseMailer.invitation_instructions(user.id, token) }

    it "sends to user's email" do
      expect(mailer.to).to contain_exactly(user.email)
    end

    # TODO
    # it "contains accept_user_invitation_path" do
    #   expect(mailer.body).to match(accept_user_invitation_path(invitation_token: token))
    # end
  end

  describe "#confirmation_instructions" do
    let(:mailer) { DeviseMailer.confirmation_instructions(user.id, token) }

    it "sends to user's email" do
      expect(mailer.to).to contain_exactly(user.email)
    end

    # TODO
    # it "contains user_confirmation_path" do
    #   expect(mailer.body).to match(user_confirmation_path(confirmation_token: token))
    # end
  end

  describe "#unlock_instructions" do
    let(:mailer) { DeviseMailer.unlock_instructions(user.id, token) }

    it "sends to user's email" do
      expect(mailer.to).to contain_exactly(user.email)
    end

    # TODO
    # it "contains user_unlock_path" do
    #   expect(mailer.body).to match(user_unlock_path(unlock_token: token))
    # end
  end
end