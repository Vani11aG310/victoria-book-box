# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :books
    resources :book_boxes
    resources :collections
    resources :users
    resources :wishlists
  end
end
 