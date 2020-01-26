shared_examples_for "paranoidal" do
  let(:paranoidal_class) { described_class }
  let(:factory_bot_class_name) { paranoidal_class.name.underscore }
  let(:paranoidal) { create(factory_bot_class_name) }

  it { is_expected.to act_as_paranoid }

  describe "#delete" do
    it "sets deleted_at to a timestamp" do
      expect do
        paranoidal.delete
      end.to change { paranoidal.reload.deleted_at }.from(nil).to(Time)
    end
  end

  describe "#destroy" do
    it "sets deleted_at to a timestamp" do
      expect do
        paranoidal.destroy
      end.to change { paranoidal.reload.deleted_at }.from(nil).to(Time)
    end
  end

  describe "#restore" do
    it "sets deleted_at to nil" do
      paranoidal.save
      paranoidal.destroy
      expect do
        paranoidal.reload.restore
      end.to change { paranoidal.reload.deleted_at }.from(Time).to(nil)
    end
  end

end