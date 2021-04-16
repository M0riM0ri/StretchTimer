Rails.application.routes.draw do
  devise_for :users
  root 'timer#start'
  get 'timer/start'
  get 'timer/stop'
end
