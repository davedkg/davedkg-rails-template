require 'rails_helper'

RSpec.describe Session, type: :model do
  
  let(:session) { create(:session) }
  
  describe 'FactoryBot' do
    it 'creates a valid model' do
      expect(session.valid?).to be_truthy
    end
  end
  
  describe "#create" do
    it "generates an auth_token" do
      expect(session.auth_token).not_to be_empty
    end
  end
  
end
