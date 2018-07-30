require 'rails_helper'

RSpec.describe Application, type: :model do

  it_behaves_like 'paranoidal'
  
  let(:application_params) { attributes_for(:application) }
  let(:application) { Application.create(application_params) }
  
  describe 'FactoryBot' do
    it 'creates a valid model' do
      expect(application.valid?).to be_truthy
    end
  end
  
  context "#valid?" do
    it "requires a name" do
      application_params.delete(:name)
      expect(Application.new(application_params).valid?).to be(false)
    end
  end
  
  context "#create" do
    it "generates a key" do
      expect(application.key).not_to be_empty
    end
  end
  
  context "#save" do
    it "downcases lname" do
      expect(application.lname).to eq(application_params[:name].downcase)
    end
  end
  
end
