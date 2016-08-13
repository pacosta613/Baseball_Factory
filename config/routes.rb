Rails.application.routes.draw do
  root 'application#index'

  namespace :api, defaults:{:format => :json} do
    resources :divisions do 
      resources :teams
    end
  end

  namespace :api, defaults:{:format => :json} do
    resources :teams do 
      resources :players
    end
  end

  namespace :api, defaults:{:format => :json} do
    resources :players, :statistics
  end

end