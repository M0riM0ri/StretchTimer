describe WorktimesController, type: :controller do

  describe 'POST #worktimes' do

    new_params = {
      start_time: 10, pause_time: 0,
      restart_time: 0, accumulate_time: 0,
      in_progress: 1, timing: 60,
    }

    it 'creates a new worktime data' do
      @user = create(:user)
      sign_in @user
      expect {
        post :create, params: { worktime: new_params }
      }.to change{ Worktime.count }.by 1
    end

    it 'updates a worktime data' do
      @user = create(:user)
      sign_in @user
      post :create, params: { worktime: new_params }
      patch :update, params: { id: @user.id, worktime: { end_time: 100 } }
      expect( @user.worktimes.find_by(user_id: @user.id).end_time ).to eq 100
    end
    
    it 'destroys a worktime data' do
      @user = create(:user)
      sign_in @user
      post :create, params: { worktime: new_params }
      expect {
        delete :destroy, params: {id: 1}
      }.to change{ Worktime.count }.by -1
    end

  end

end