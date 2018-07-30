require "rails_helper"

describe DeviseMailer, type: :mailer do
  let(:user) { create(:user) }
  let(:token) { SecureRandom.uuid }
  
  describe "#confirmation_instructions" do
    let(:mailer) { DeviseMailer.confirmation_instructions(user.id, token) }

    it "contains actionable url" do
      expect(mailer.body.encoded).to include(user_confirmation_url(confirmation_token: token))
    end
  end
  
  describe "#invitation_instructions" do
    let(:mailer) { DeviseMailer.invitation_instructions(user.id, token) }

    it "contains actionable url" do
      expect(mailer.body.encoded).to include(accept_user_invitation_url(invitation_token: token))
    end
  end

  describe "#reset_password_instructions" do
    let(:mailer) { DeviseMailer.reset_password_instructions(user.id, token) }

    it "contains actionable url" do
      expect(mailer.body.encoded).to include(edit_user_password_url(reset_password_token: token))
    end
  end

end