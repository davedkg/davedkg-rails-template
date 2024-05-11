# frozen_string_literal: true

shared_examples_for 'paranoidal' do
  let(:paranoidal_class) { described_class }
  let(:factory_bot_class_name) { paranoidal_class.name.underscore }
  let(:paranoidal) { create(factory_bot_class_name) }
  let(:rich_text_fields) do
    paranoidal.methods.grep(/^rich_text_[^=]+=$/) do |field|
      paranoidal.send(field[/^rich_text_([^=]+)=$/, 1])
    end
  end

  it { is_expected.to act_as_paranoid }

  describe '#delete' do
    it 'sets deleted_at to a timestamp' do
      expect do
        paranoidal.delete
      end.to change { paranoidal.reload.deleted_at }.from(nil).to(Time)
    end
  end

  describe '#destroy' do
    it 'sets deleted_at to a timestamp' do
      expect do
        paranoidal.destroy
      end.to change { paranoidal.reload.deleted_at }.from(nil).to(Time)
    end
  end

  describe '#restore' do
    before do
      rich_text_fields.each { |field| field.body = 'foo' }
      paranoidal.save
      paranoidal.destroy
    end

    it 'sets deleted_at to nil' do
      expect do
        paranoidal.reload.restore
      end.to change { paranoidal.reload.deleted_at }.from(Time).to(nil)
    end

    # rubocop:disable RSpec/MultipleExpectations
    it 'restores rich text fields' do
      expect(rich_text_fields).to all(be_deleted)
      paranoidal.restore
      expect(rich_text_fields.map(&:reload).map(&:deleted?)).to all(be_falsey)
    end
    # rubocop:enable RSpec/MultipleExpectations
  end
end
