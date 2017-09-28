Rails.application.routes.draw do
  # namespace :api, defaults: {format, :json} do
  #
  # end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show]
      resources :reviews, only: [:index,:create]
  end
  root "static_pages#root"
end
