# frozen_string_literal: true

require 'rails_helper'

describe ApplicationCable::Connection, type: :channel do
  let(:user_id) { 1 }
  let(:user) { instance_double(User, id: user_id) }
  let(:env) { instance_double('env') }
  let(:warden) { instance_double('warden', user: user) }

  before do
    # rubocop:disable RSpec/AnyInstance
    allow_any_instance_of(described_class).to receive(:env) { env }
    # rubocop:enable RSpec/AnyInstance
    allow(env).to receive(:[]).with('warden') { warden }
    allow(env['warden']).to receive(:authenticate!) { user }
  end

  context 'when user is authenticated' do
    it 'successfully connects' do
      connect '/cable', headers: { 'X-USER-ID' => user_id }
      expect(connection.current_user).to eq user
    end
  end

  context 'when user is NOT authenticated' do
    let(:user) { nil }

    it 'rejects connection' do
      expect { connect '/cable', headers: { 'X-USER-ID' => user_id } }.to have_rejected_connection
    end
  end
end
