class TimerController < ApplicationController
  def index
    @new_worktime = current_user.worktimes.build if user_signed_in?
  end
  
  def work
    @update_worktime = current_user.worktimes.find_by(user_id: current_user.id) if user_signed_in?
    @start_time = @update_worktime.start_time
    @pause_time = @update_worktime.pause_time
    @restart_time = @update_worktime.restart_time
    @end_time = @update_worktime.end_time
    @accumulate_time = @update_worktime.accumulate_time
    @in_progress = @update_worktime.in_progress
  end

  def break
  end
  
  def about
  end

  def timerlog
  end

end
