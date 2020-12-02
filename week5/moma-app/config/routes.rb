Rails.application.routes.draw do
  
  # Artist CRUD:

  # Create ####################

  # 1. new (blank form)
  get '/artists/new' => 'artists#new', as: 'new_artist'  # gives new_artist_path

  # 2. create (form submits here, add to DB, redirect to index)
  post '/artists' => 'artists#create'

  # Read ######################

  # 1. index (all rows)
  get '/artists' => 'artists#index'

  # 2. show (details about one row, by ID)
  get '/artists/:id' => 'artists#show', as: 'artist' # artist_path

  # Update ####################

  # 1. edit (show pre-populated form, i.e. also get row by ID)
  get '/artists/:id/edit' => 'artists#edit', as: 'edit_artist' # edit_artist_path

  # 2. update (form submits here, update DB, redirect to show)
  # Because we are using the 'form_with' form builder, it automatically
  # submits edit forms (as opposed to new forms) using the more recent
  # 'patch' method, instead of 'post'
  patch '/artists/:id' => 'artists#update'

  # Delete ####################

  # 1. destroy (remove row from DB, redirect to index)
  delete '/artists/:id' => 'artists#destroy'  # same helper as show: artist_path(id)


  # Works CRUD routes
  resources :works
  # ZOMMNGGG! This one line create ALL 7 STANDARD CRUD ROUTES

end # ALL ROUTE ABOVE THIS LINE
