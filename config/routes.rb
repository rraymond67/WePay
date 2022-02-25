Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  
  resources :users

  resources :items do
    resources :bids
  end

  get '/users/:user_id/items', to: 'itemss#get_user_items'
  get '/bids', to: 'bids#get_all_bids'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
