class CreateWorktimes < ActiveRecord::Migration[6.0]
  def change
    create_table :worktimes do |t|
      t.integer :start_time
      t.integer :pause_time
      t.integer :accumulate_time
      t.integer :end_time
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :worktimes, [:user_id, :created_at]
  end
end
