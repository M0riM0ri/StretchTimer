Rails.application.routes.draw do
  get 'main_pages/home'
  get 'main_pages/logs'
  get 'main_pages/help'
  devise_for :users
  root 'timer#start'
  get 'timer/start'
  get 'timer/stop'
end
