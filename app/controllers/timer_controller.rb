class TimerController < ApplicationController
  def index
    @new_worktime = current_user.worktimes.build if user_signed_in?
  end
  
  def work
    @update_worktime = current_user.worktimes.find_by(user_id: current_user.id) if user_signed_in?
  end

  def break
  end
  
  def about
  end

  def timerlog
  end

end
