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
    @worktimes = current_user.worktimes.page(params[:page]).per(10) if user_signed_in? 
  end

  def guest_sign_in
    user = User.create do |user|
      user.name     = "Guest"
      user.email    = SecureRandom.alphanumeric(15) + "@email.com"
      user.password = SecureRandom.urlsafe_base64
    end
    for num in 1..15
      worktime = user.worktimes.create do |worktime|
        worktime.start_time       = Time.now - 60*1000*1000 + num * 60*1000 - 100*60*1000
        worktime.accumulate_time  = 5*60*1000 * num
        worktime.end_time         = Time.now - 60*1000*1000 + num * 60*1000
        worktime.in_progress      = 1
        worktime.timing           = 60
      end
    end
    sign_in user
    redirect_to root_path, notice: 'ゲストとしてログインしました。'
  end

end
