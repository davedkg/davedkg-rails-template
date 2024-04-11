# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2020_01_26_002834) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at", precision: nil
    t.datetime "last_sign_in_at", precision: nil
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at", precision: nil
    t.datetime "confirmation_sent_at", precision: nil
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at", precision: nil
    t.string "invitation_token"
    t.datetime "invitation_created_at", precision: nil
    t.datetime "invitation_sent_at", precision: nil
    t.datetime "invitation_accepted_at", precision: nil
    t.integer "invitation_limit"
    t.string "invited_by_type"
    t.bigint "invited_by_id"
    t.integer "invitations_count", default: 0
    t.string "name"
    t.string "role", default: "user", null: false
    t.string "time_zone", default: "Eastern Time (US & Canada)", null: false
    t.string "state", default: "enabled", null: false
    t.datetime "deleted_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["deleted_at", "confirmation_token"], name: "index_users_on_deleted_at_and_confirmation_token", unique: true
    t.index ["deleted_at", "email"], name: "index_users_on_deleted_at_and_email", unique: true
    t.index ["deleted_at", "invitation_token"], name: "index_users_on_deleted_at_and_invitation_token", unique: true
    t.index ["deleted_at", "invitations_count"], name: "index_users_on_deleted_at_and_invitations_count"
    t.index ["deleted_at", "invited_by_id"], name: "index_users_on_deleted_at_and_invited_by_id"
    t.index ["deleted_at", "name"], name: "index_users_on_deleted_at_and_name", unique: true
    t.index ["deleted_at", "reset_password_token"], name: "index_users_on_deleted_at_and_reset_password_token", unique: true
    t.index ["deleted_at", "unlock_token"], name: "index_users_on_deleted_at_and_unlock_token", unique: true
    t.index ["invited_by_type", "invited_by_id"], name: "index_users_on_invited_by_type_and_invited_by_id"
  end

end
