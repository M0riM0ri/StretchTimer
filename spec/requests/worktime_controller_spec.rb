describe WorktimesController, type: :controller do

  describe 'POST #worktimes' do

    params = {
      start_time: 10,
      pause_time: 0,
      restart_time: 0,
      accumulate_time: 0,
      in_progress: 1,
      timing: 60,
    }

    it 'creates a new worktime data' do
      @user = create(:user)
      sign_in @user
      expect {
        post :create, params: { worktime: params }
      }.to change{ Worktime.count }.by 1
    end
    
    it 'destroys a worktime data' do
      @user = create(:user)
      sign_in @user
      post :create, params: { worktime: params }
      expect {
        delete :destroy, params: {id: 1}
      }.to change{ Worktime.count }.by -1
    end

  end

end