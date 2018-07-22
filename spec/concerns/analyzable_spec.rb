shared_examples_for "analyzable" do
  let(:analyzable_class) { described_class }
  let(:factory_bot_class_name) { analyzable_class.to_s.underscore.to_sym }
  let(:analyzable) { build(factory_bot_class_name) }

  context "#{described_class} class" do
    it 'includes Analyzable concern' do
      expect(analyzable_class.include?(Analyzable)).to be_truthy
    end
  end
  
  # TODO implement me
  # context "#totals_by_month" do
  #   it 'returns the correct number of data points'
  #   it 'includes zeroed data points'
  # end
end