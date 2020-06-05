# frozen_string_literal: true

namespace :cron do
  task daily: :environment do
    ApplicationRecord.purge_deleted_records
  end
end
