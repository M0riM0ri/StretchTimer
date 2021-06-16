class AddInprogressToWorkTimes < ActiveRecord::Migration[6.0]
  def change
    add_column :worktimes, :in_progress, :integer
  end
end
