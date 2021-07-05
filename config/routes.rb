Rails.application.routes.draw do
  devise_for :users
  
  root 'timer#index'

  # Timer
  get 'timer/index'
  get 'timer/work'
  get 'timer/break'
  get 'timer/about'
  get 'timer/timerlog'
  resources :worktimes
  post 'timer/guest_sign_in', to: 'timer#guest_sign_in'

  # Login
  get 'users', to: 'users#sign_up' 

  # Mailer
  resources :contacts, only: [:new, :create]
  post 'contacts/confirm', to: 'contacts#confirm', as: 'confirm'
  post 'contacts/back', to: 'contacts#back', as: 'back'
  get 'done', to: 'contacts#done', as: 'done'

end
