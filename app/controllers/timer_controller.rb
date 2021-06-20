class TimerController < ApplicationController
  def index
    if user_signed_in? 
      @new_worktime = current_user.worktimes.build
      @update_worktime = current_user.worktimes.find_by(user_id: current_user.id)
      if @update_worktime.present?
        if @update_worktime.start_time.present? & @update_worktime.end_time.nil?
          redirect_to timer_work_path, turbolinks: false
        end
      end
    end
  end
  
  def work
    if user_signed_in? 
      @update_worktime = current_user.worktimes.find_by(user_id: current_user.id)
      if @update_worktime.start_time.present? & @update_worktime.end_time.present?
        redirect_to timer_index_path
      end
    end
  end

  def break
  end
  
  def about
  end

  def timerlog
  end

end
