Rails.application.routes.draw do
  root 'pages#index'
  

  scope(:path => '/api') do
    get '/meals', to: 'meals#all_meals'
  end
end
