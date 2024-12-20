# frozen_string_literal: true

class DeviseCreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users, id: :uuid do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

      # Custom
      t.string :name
      t.string :state, null: false, default: User.states[:enabled]
      t.string :role, null: false, default: User.roles[:user]
      t.string :time_zone, null: false, default: 'Eastern Time (US & Canada)'

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      # t.integer  :sign_in_count, default: 0, null: false
      # t.datetime :current_sign_in_at
      # t.datetime :last_sign_in_at
      # t.string   :current_sign_in_ip
      # t.string   :last_sign_in_ip

      # Confirmable
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at

      ## Invitable
      t.string     :invitation_token
      t.datetime   :invitation_created_at
      t.datetime   :invitation_sent_at
      t.datetime   :invitation_accepted_at
      t.integer    :invitation_limit
      t.references :invited_by, polymorphic: true
      t.integer    :invitations_count, default: 0

      # Paranoidal
      t.datetime :deleted_at

      t.timestamps null: false
    end

    add_index :users, [:deleted_at, :email],                unique: true
    add_index :users, [:deleted_at, :reset_password_token], unique: true
    add_index :users, [:deleted_at, :confirmation_token],   unique: true
    # add_index :users, [:delted_at, :unlock_token],         unique: true
    add_index :users, [:deleted_at, :invitation_token],     unique: true
  end
end
