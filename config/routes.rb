Rails.application.routes.draw do
  devise_for :users

  get 'users', to: 'users#sign_up' 

  get 'timer/index'
  get 'timer/work'
  get 'timer/break'
  
  get 'timer/about'
  get 'timer/timerlog'

  root 'timer#index'

  resources :worktimes
end
