Rails.application.routes.draw do

  # Create ###############################

  # 1. Blank form
  get '/planets/new' => 'planets#new', as: 'new_planet'
                                       # new_planet_path

  # 2. Form submits here, save to DB, redirect
  post '/planets' => 'planets#create'

  # Read #################################

  # 1. Index page, i.e. list every row of the 'planets' table
  get '/planets' => 'planets#index'
                    # use app/controllers/planets_controller.rb
                    # i.e. the class PlanetsController
                    # and use the method in that class
                    # called 'index'

  # 2. Show page, i.e. details about one row (planet) by ID
  get '/planets/:id' => 'planets#show', as: 'planet'
                                        # gives planet_path


  # Update ###############################

  # 1. Show pre-filled form
  get '/planets/:id/edit' => 'planets#edit', as: 'edit_planet'
                                             # edit_planet_path(id)

  # 2. Form submits to here, do DB update, redirect
  post '/planets/:id' => 'planets#update'


  # Destroy ##############################
  get '/planets/:id/delete' => 'planets#destroy', as: 'destroy_planet'

end # all routes must go above
