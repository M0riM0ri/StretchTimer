describe Users::SessionsController do

    it 'creates a new user data' do
      expect {
        @user = create(:user)
      }.to change{ User.count }.by 1
    end

  end
