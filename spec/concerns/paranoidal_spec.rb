shared_examples_for "paranoidal" do
  let(:paranoidal_class) { described_class }
  let(:factory_bot_class_name) { paranoidal_class.to_s.underscore.to_sym }
  let(:paranoidal) { create(factory_bot_class_name) }

  context "#{described_class} class" do
    it 'includes Paranoidal concern' do
      expect(paranoidal_class.include?(Paranoidal)).to be_truthy
    end
  end

  describe ".delete" do
    it 'sets deleted_at to a timestamp' do
      expect{ paranoidal.delete }.to change{ paranoidal.reload.deleted_at }.from(nil).to(Time)
    end
  end

  describe ".destroy" do
    it 'sets deleted_at to a timestamp' do
      expect{ paranoidal.destroy }.to change{ paranoidal.reload.deleted_at }.from(nil).to(Time)
    end
  end

  describe ".restore" do
    it 'sets deleted_at to nil' do
      paranoidal.delete

      expect { paranoidal.reload.restore }.to change{ paranoidal.reload.deleted_at }.from(Time).to(nil)
    end
  end

end