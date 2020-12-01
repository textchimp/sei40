
class PlanetsController < ApplicationController


  # CREATE ####################################

  # 1. Blank form, no query
  def new
    @planet = Planet.new
  end

  # 2. Form submits here, save form data to DB, redirect
  def create
    # render plain: params.to_s
    # raise 'hell'  # force an error and a web console to open

    # There is an exta level of nesting here: the form fields
    # are within a parent hash 'params[:planet]' - this is
    # because we built our form HTML using the form_with helper,
    # and it creates tags like
    # <input type="text" name="planet[name]" >
    # which cause params to have that extra nesting

    # TODO: make sure planet was actually created
    Planet.create(
      name: params[:planet][:name],
      mass: params[:planet][:mass],
      orbit: params[:planet][:orbit],
      moons: params[:planet][:moons],
      image_url: params[:planet][:image_url]
    )

    # 'create' doesn't show its own template due to issues
    # around reloading a page reached via a form submit
    # (i.e. duplicating the create) - instead we redirect
    # somewhere else

    redirect_to planets_path  # go to 'planets' i.e. the index

  end # create()

  # READ ######################################

  # 1. Index of planets
  def index
    # AR query to get all planets, save into instance variable
    @planets = Planet.all
  end # index

  # 2. Show page for one planet, by ID
  def show
    @planet = Planet.find params[:id]
  end

  # Update #####################################

  # 1. Show pre-filled form (which means query the DB to
  #    find the item to edit by its ID)
  def edit
    @planet = Planet.find params[:id]
  end # edit()

  # 2. Form submits here, do the update after
  #    finding the item first by ID, and then redirect
  def update

    # 1. Query the DB to get the item we want to edit.
    #    We have the id to lookup from the url /planets/:id
    #    i.e. it's in params[:id]
    planet = Planet.find params[:id]

    # 2. call .update() on that object, passing in the
    #    new values from the form submit, in params[:planet]
    # TODO: make sure the update was successful
    # i.e. did it fail because of validations?
    planet.update(
      name: params[:planet][:name],
      mass: params[:planet][:mass],
      orbit: params[:planet][:orbit],
      moons: params[:planet][:moons],
      image_url: params[:planet][:image_url]
    )

    # As with 'create', we don't show our own template for
    # this method - to avoid resubmission errors, we
    # redirect to the show page for the item we just updated
    redirect_to planet_path(planet.id)  #"/planets/#{ planet.id }"

  end # update()


  # Delete #####################################
  def destroy
    Planet.destroy params[:id]

    redirect_to planets_path  # back to index
  end # destroy()

end # PlanetsController
