Rails.application.routes.draw do

  # API endpoints for frontend

  # 1. Search results: /flights/search/SYD/MEL
  get '/flights/search/:origin/:destination' => 'flights#search'

  # 2.  Show page for a flight
  get '/flights/:id' => 'flights#show'
  # resources :flights, only: [:show]

  # 3. Confirm a booking:
  # post '/reservations' => 'reservations#create'
  post '/flights/:id/reservation' => 'flights#create_reservation'

end
