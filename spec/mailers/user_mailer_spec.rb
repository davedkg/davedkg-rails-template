# frozen_string_literal: true

require 'rails_helper'

describe UserMailer do
  let(:record) { create(:user) }
  let(:token) { SecureRandom.uuid }

  # before do
  #   allow_any_instance_of(ApplicationMailer).to receive(:utm_params).and_return({})
  # end

  describe '#reset_password_instructions' do
    subject(:reset_password_instructions) { described_class.reset_password_instructions(record.id, token) }

    it "sends to user's email" do
      expect(reset_password_instructions.to).to contain_exactly(record.email)
    end

    it 'contains edit_user_password_url' do
      expect(reset_password_instructions.body).to have_link(nil,
                                                            href: edit_user_password_url(reset_password_token: token))
    end
  end

  describe '#invitation_instructions' do
    subject(:invitation_instructions) { described_class.invitation_instructions(record.id, token) }

    it "sends to user's email" do
      expect(invitation_instructions.to).to contain_exactly(record.email)
    end

    it 'contains accept_user_invitation_url' do
      expect(invitation_instructions.body).to have_link(nil, href: accept_user_invitation_url(invitation_token: token))
    end
  end

  describe '#unlock_instructions' do
    subject(:unlock_instructions) { described_class.unlock_instructions(record.id, token) }

    it "sends to user's email" do
      expect(unlock_instructions.to).to contain_exactly(record.email)
    end

    it 'contains user_unlock_url' do
      expect(unlock_instructions.body).to have_link(nil, href: user_unlock_url(unlock_token: token))
    end
  end
end
