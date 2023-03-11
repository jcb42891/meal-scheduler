Rails.application.routes.draw do
  root 'pages#index'
  
  get '/meals', to: 'meals#all_meals'
end
