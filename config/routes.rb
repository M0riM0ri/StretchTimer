Rails.application.routes.draw do
  devise_for :users
  get '/users/', to: 'users#sign_up' 
  root 'timer#index'
end
