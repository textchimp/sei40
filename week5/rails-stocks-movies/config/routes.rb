Rails.application.routes.draw do

  # Define the root route, preferred over "get '/' => 'whatever'"
  root to: 'stocks#welcome'

  # Stocks

  # 1. Blank form route
  get '/stocks' => 'stocks#form'

  # 2. Form submit route
  get '/stocks/lookup' => 'stocks#do_lookup'


  # MovieDB

  # 1. Blank form route
  get '/movies' => 'movies#search_form'

  # 2. Form submit route
  get '/movies/search' => 'movies#search'

end # all routes above this line plz!
