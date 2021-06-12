class TimerController < ApplicationController
  def index
    @worktime = current_user.worktimes.build if user_signed_in?
  end
  
  def about
  end

  def timerlog
  end

end
