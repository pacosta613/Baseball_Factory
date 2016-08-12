Rails.application.routes.draw do
  root 'application#index'

  namespace :api, defaults:{:format => :json} do
    resources :divisions do 
      resources :teams do 
        resources :players
      end
    end
  end

  namespace :api, defaults:{:format => :json} do
    resources :teams, :players, :statistics
  end

end