shared_examples_for "chartable" do
  let(:chartable_class) { described_class }
  let(:factory_bot_class_name) { chartable_class.to_s.underscore.to_sym }
  let(:chartable) { build(factory_bot_class_name) }

  context "#{described_class} class" do
    it 'includes chartable concern' do
      expect(chartable_class.include?(Chartable)).to be_truthy
    end
  end
  
  # TODO implement me
  # context "#totals_by_month" do
  #   it 'returns the correct number of data points'
  #   it 'includes zeroed data points'
  # end
end