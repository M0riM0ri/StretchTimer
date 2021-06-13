class WorktimesController < ApplicationController
  def create
    @new_worktime = current_user.worktimes.build(worktime_params) if user_signed_in?
    if @new_worktime.save
      puts 1
    end
  end
  
  def update
    @update_worktime = current_user.worktimes.find(1) if user_signed_in?
    if @update_worktime.update(worktime_params)
      puts 1
    end
  end

  def destroy
  end

    def worktime_params
      params.require(:worktime).permit(:start_time, :pause_time)
    end
end
