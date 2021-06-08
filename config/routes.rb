Rails.application.routes.draw do
  devise_for :users

  get 'users', to: 'users#sign_up' 

  get 'timer/index'
  get 'timer/about'

  root 'timer#index'
end
