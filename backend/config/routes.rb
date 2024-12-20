Rails.application.routes.draw do
  resources :wishlists
  resources :collections
  resources :books
  resources :book_boxes
  resources :users
  resources :subjects
  resources :authors
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
