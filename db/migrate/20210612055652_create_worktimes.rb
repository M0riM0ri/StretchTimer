class CreateWorktimes < ActiveRecord::Migration[6.0]
  def change
    create_table :worktimes do |t|
      t.bigint :start_time
      t.bigint :pause_time
      t.bigint :accumulate_time
      t.bigint :end_time
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :worktimes, [:user_id, :created_at]
  end
end
