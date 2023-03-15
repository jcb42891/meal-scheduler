Rails.application.routes.draw do
  root 'pages#index'
  

  scope(:path => '/api') do
    # Meals controller
    get '/meals', to: 'meals#all_meals'
    get '/meals/:id', to: 'meals#get_meal'
    post '/meals/add', to: 'meals#add_meal'
    post '/meals/edit/:id', to: 'meals#edit_meal'
    delete 'meals/destroy/:id', to: 'meals#destroy_meal'

    # Scheduled Meals controller
    get '/scheduled-meals', to: 'scheduled_meals#get_all_for_anchor_date'
    post '/schedule-meal', to: 'scheduled_meals#schedule_meal'
    delete 'scheduled-meal/destroy/:id', to: 'scheduled_meals#destroy_scheduled_meal'
  end

  # Redirect non-api routes back to the index page,
  # the react router will intercept from here
  get '*path', to: 'pages#index'
end
