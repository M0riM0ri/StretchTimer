class TimerController < ApplicationController
  def index
    if user_signed_in? 
      @new_worktime = current_user.worktimes.build
      @update_worktime = current_user.worktimes.find_by(user_id: current_user.id)
      if @update_worktime.present?
        if @update_worktime.start_time.present? & @update_worktime.end_time.nil?
          redirect_to timer_work_path
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
    # @worktimes = current_user.worktimes.all if user_signed_in? 
    @worktimes = current_user.worktimes.page(params[:page]).per(10) if user_signed_in? 
  end

end
