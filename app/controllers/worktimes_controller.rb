class WorktimesController < ApplicationController
  def create
    @worktime = current_user.worktimes.build(worktime_params) if user_signed_in?
    if @worktime.save
      p "ok"
    end
  end

  def destroy
  end

    def worktime_params
      params.require(:worktime).permit(:start_time)
    end
end
