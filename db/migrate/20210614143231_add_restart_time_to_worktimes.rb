class AddRestartTimeToWorktimes < ActiveRecord::Migration[6.0]
  def change
    add_column :worktimes, :restart_time, :bigint
  end
end
