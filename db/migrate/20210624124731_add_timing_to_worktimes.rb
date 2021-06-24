class AddTimingToWorktimes < ActiveRecord::Migration[6.0]
  def change
    add_column :worktimes, :timing, :integer
  end
end
