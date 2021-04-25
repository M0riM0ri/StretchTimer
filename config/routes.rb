Rails.application.routes.draw do
  get 'timer/index'
  get 'timer/log'
  root 'application#hello'
end
