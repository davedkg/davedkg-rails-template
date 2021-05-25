class AddStateToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :state, :string, default: User.states[:enabled], null: false
  end
end
