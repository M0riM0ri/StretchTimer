describe TimerController, type: :controller do

  let(:user) { create(:user) }
  let(:user_params) { attributes_for(:user) }
  let(:invalid_user_params) { attributes_for(:user, name: "") }

  describe 'GET #index' do

    it 'responds the correct status' do
      get :index
      expect(response.status).to eq 200
    end

    it 'renders the :index template' do
      get :index
      expect(response).to render_template :index
    end
    
    # it 'responds ' do
    #   expect{
    #     post new_user_registration_path(user_params)
    #   }.to change(User, :count).by 1
    # end

  end

end