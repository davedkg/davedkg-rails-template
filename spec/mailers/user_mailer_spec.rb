require "rails_helper"

describe UserMailer, type: :mailer do
  let(:user) { create(:user) }
  let(:token) { SecureRandom.uuid }

  # before do
  #   allow_any_instance_of(ApplicationMailer).to receive(:utm_params).and_return({})
  # end

  describe "#reset_password_instructions" do
    let(:mailer) { UserMailer.reset_password_instructions(user.id, token) }

    it "sends to user's email" do
      expect(mailer.to).to contain_exactly(user.email)
    end

    it "contains edit_user_password_url" do
      expect(mailer.body).to have_link(nil, href: edit_user_password_url(reset_password_token: token))
    end
  end

  describe "#invitation_instructions" do
    let(:mailer) { UserMailer.invitation_instructions(user.id, token) }

    it "sends to user's email" do
      expect(mailer.to).to contain_exactly(user.email)
    end

    it "contains accept_user_invitation_url" do
      expect(mailer.body).to have_link(nil, href: accept_user_invitation_url(invitation_token: token))
    end
  end

  describe "#confirmation_instructions" do
    let(:mailer) { UserMailer.confirmation_instructions(user.id, token) }

    it "sends to user's email" do
      expect(mailer.to).to contain_exactly(user.email)
    end

    it "contains user_confirmation_url" do
      expect(mailer.body).to have_link(nil, href: user_confirmation_url(confirmation_token: token))
    end
  end

  describe "#unlock_instructions" do
    let(:mailer) { UserMailer.unlock_instructions(user.id, token) }

    it "sends to user's email" do
      expect(mailer.to).to contain_exactly(user.email)
    end

    it "contains user_unlock_url" do
      expect(mailer.body).to have_link(nil, href: user_unlock_url(unlock_token: token))
    end
  end
end