Rails.application.routes.draw do
  root 'application#index'

  namespace :api, defaults:{:format => :json} do
    resources :divisions do 
      resources :teams do 
        resources :players
      end
    end
  end

  resources :statistics

end