Rails.application.routes.draw do
  devise_for :users
  resources :recipes
  resources :users, only: :show
  resources :categories

  root 'recipes#index'
end

