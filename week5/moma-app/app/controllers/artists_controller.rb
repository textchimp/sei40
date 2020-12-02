
class ArtistsController < ApplicationController

  # Artist CRUD:

  # Create ####################

  # 1. new (blank form)
  def new
    # Make a blank artist object - NOT in the DB yet, no ID;
    # we do this so the form_with helper knows what kind of form to show
    # (a Create form, instead of an Update form)
    @artist = Artist.new
  end  # new

  # 2. create (form submits here, add to DB, redirect to index)
  def create
     # raise 'hell' # force an error, so we can debug in the web console

     # Artist.create
     # Artist.create(
     #   name: params[:artist][:name],
     #   nationality: params[:artist][:nationality],
     #   # etc...
     # )

     # Try to just pass the hash of form values to .create - so much quicker!
     # Artist.create params[:artist]
     # NOT SECURE!! We don't just let through any old form fields that were submitted, because users can change them (i.e. in the Dev Tools)

     # Strong params:
     # We write a method in the 'private' section of this controller,
     # which acts as a 'doorman' to check the fields we're passing in from
     # the form via params - only the approved field are permitted through
     Artist.create artist_params

     redirect_to artists_path

  end  #create

  # Read ######################

  # 1. index (all rows)
  def index
    @artists = Artist.all
  end  # index

  # 2. show (details about one row, by ID)
  def show
    @artist = Artist.find params[:id]
  end # show


  # Update ####################

  # 1. edit (show pre-populated form, i.e. also get row by ID)
  def edit
    @artist = Artist.find params[:id]
  end  #edit


  # 2. update (form submits here, update DB, redirect to show)
  def update
    artist = Artist.find params[:id]    # lookup the artist by ID, first
    artist.update artist_params         # using strong params again to update
    redirect_to artist_path(artist.id)  # back to the show page
  end

  # Delete ####################

  # 1. destroy (remove row from DB, redirect to index)
  def destroy
    Artist.destroy params[:id]
    redirect_to artists_path  # back to index
  end

  # Methods defined below the 'private' heading are for 'internal use' only
  # by the actions of this controller;
  # this is, they are NOT the handlers for routes defined in routes.rb
  private


  def artist_params
    # Make sure the ':artist' key is set, and only let through the approved form fields from within that
    params.require(:artist).permit(:name, :nationality, :dob, :period, :roundness, :bio, :image)
  end



end # ArtistsController
