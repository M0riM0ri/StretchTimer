require 'rails_helper'

RSpec.describe TimerController, type: :controller do

  let(:user) { create(:user) }
  let(:user_params) { attributes_for(:user) }
  let(:invalid_user_params) { attributes_for(:user, name: "") }

  describe 'POST #create' do

    it 'renders the :index template' do
      get :index
      expect(response).to have_http_status "200"
    end
    
    # it 'responds ' do
    #   expect{
    #     post new_user_registration_path(user_params)
    #   }.to change(User, :count).by 1
    # end

  end

end