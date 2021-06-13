class WorktimesController < ApplicationController
  def create
    @new_worktime = current_user.worktimes.build(worktime_params) if user_signed_in?
    @new_worktime.save
  end
  
  def update
    @update_worktime = current_user.worktimes.find_by(user_id: current_user.id) if user_signed_in?
    @update_worktime.update(worktime_params)
  end

  def destroy
  end

  private
    def worktime_params
      params.require(:worktime).permit(:start_time, :pause_time)
    end
end
