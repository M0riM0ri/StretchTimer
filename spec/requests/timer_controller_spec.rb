describe TimerController, type: :controller do

  describe 'GET static pages' do

    it 'responds the correct status' do
      get :index
      expect(response.status).to eq 200
    end

    it 'renders the :index template' do
      get :index
      expect(response).to render_template :index
    end

    it 'renders the :work template' do
      get :work
      expect(response).to render_template :work
    end

    it 'renders the :index template' do
      get :break
      expect(response).to render_template :break
    end

    it 'renders the :index template' do
      get :about
      expect(response).to render_template :about
    end

    it 'renders the :index template' do
      get :timerlog
      expect(response).to render_template :timerlog
    end

  end

  describe 'GET guest_sign_in' do

    it 'change counts of User when guest sign in' do
      expect{
        get :guest_sign_in
      }.to change{ User.count }.by 1
    end

    it 'redirects to top page' do
      get :guest_sign_in
      expect(response).to redirect_to root_path
    end

  end

end