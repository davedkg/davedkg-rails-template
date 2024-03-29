# frozen_string_literal: true

shared_examples_for 'purgable' do
  let(:purgable_class) { described_class }
  let(:factory_bot_class_name) { purgable_class.name.underscore }

  describe '.purgable' do
    before do
      create_list(factory_bot_class_name, 2)
      create(factory_bot_class_name, deleted_at: 10.days.ago)
      create(factory_bot_class_name, deleted_at: 31.days.ago)
    end

    it 'only returns deleted records over 30 day sold' do
      expect(purgable_class.purgable.count).to eq(1)
    end
  end
end
