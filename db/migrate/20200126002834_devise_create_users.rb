# frozen_string_literal: true

class DeviseCreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ''
      t.string :encrypted_password, null: false, default: ''

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.inet     :current_sign_in_ip
      t.inet     :last_sign_in_ip

      ## Confirmable
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      t.string   :unlock_token # Only if unlock strategy is :email or :both
      t.datetime :locked_at

      ## Invitable
      t.string     :invitation_token
      t.datetime   :invitation_created_at
      t.datetime   :invitation_sent_at
      t.datetime   :invitation_accepted_at
      t.integer    :invitation_limit
      t.references :invited_by, polymorphic: true
      t.integer    :invitations_count, default: 0

      t.string :name
      t.string :role,      null: false, default: User.roles[:user]
      t.string :time_zone, null: false, default: 'Eastern Time (US & Canada)'

      ## Timestamps
      t.datetime :deleted_at, precision: 6
      t.timestamps null: false
    end

    add_index :users, %i[deleted_at name],                 unique: true
    add_index :users, %i[deleted_at email],                unique: true
    add_index :users, %i[deleted_at reset_password_token], unique: true
    add_index :users, %i[deleted_at confirmation_token],   unique: true
    add_index :users, %i[deleted_at unlock_token],         unique: true
    add_index :users, %i[deleted_at invitations_count]
    add_index :users, %i[deleted_at invitation_token], unique: true
    add_index :users, %i[deleted_at invited_by_id]
  end
end
