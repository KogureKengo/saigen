Rails.application.routes.draw do
  devise_for :users
  resources :recipes do
    collection do
      get 'search'
    end
  end
  resources :users, only: :show
  resources :categories

  root 'recipes#index'
end

