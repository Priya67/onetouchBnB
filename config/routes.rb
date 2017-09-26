Rails.application.routes.draw do
  # namespace :api, defaults: {format, :json} do
  #
  # end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show] do

      resources :reviews, only: [:create]
    end
  end
  root "static_pages#root"
end
