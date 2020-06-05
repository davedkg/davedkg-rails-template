# frozen_string_literal: true

require 'rails_helper'

describe ApplicationJob, type: :job do
  describe '#perform_later' do
    it 'queues a job' do
      expect { described_class.perform_later('dummy_job') }.to have_enqueued_job
    end
  end
end
