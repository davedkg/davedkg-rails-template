# frozen_string_literal: true

require 'rails_helper'

describe UserMailer, type: :mailer do
  let(:record) { create(:user) }
  let(:token) { SecureRandom.uuid }

  # before do
  #   allow_any_instance_of(ApplicationMailer).to receive(:utm_params).and_return({})
  # end

  describe '#reset_password_instructions' do
    subject { described_class.reset_password_instructions(record.id, token) }

    it "sends to user's email" do
      expect(subject.to).to contain_exactly(record.email)
    end

    it 'contains edit_user_password_url' do
      expect(subject.body).to have_link(nil, href: edit_user_password_url(reset_password_token: token))
    end
  end

  describe '#invitation_instructions' do
    subject { described_class.invitation_instructions(record.id, token) }

    it "sends to user's email" do
      expect(subject.to).to contain_exactly(record.email)
    end

    it 'contains accept_user_invitation_url' do
      expect(subject.body).to have_link(nil, href: accept_user_invitation_url(invitation_token: token))
    end
  end

  describe '#unlock_instructions' do
    subject { described_class.unlock_instructions(record.id, token) }

    it "sends to user's email" do
      expect(subject.to).to contain_exactly(record.email)
    end

    it 'contains user_unlock_url' do
      expect(subject.body).to have_link(nil, href: user_unlock_url(unlock_token: token))
    end
  end
end
