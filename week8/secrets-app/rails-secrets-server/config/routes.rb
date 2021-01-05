Rails.application.routes.draw do

  # list of all secrets
  get '/secrets' => 'secrets#index'

  # post a new secret
  post '/secrets' => 'secrets#create'

end
