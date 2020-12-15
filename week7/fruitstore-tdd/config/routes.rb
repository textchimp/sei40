Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/fruits' => 'fruits#index'
  post '/fruits' => 'fruits#create'

  get '/fruits/:id' => 'fruits#show', as: 'fruit'
end
