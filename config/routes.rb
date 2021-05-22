Rails.application.routes.draw do
  devise_for :users
  root 'timer#index'
end
