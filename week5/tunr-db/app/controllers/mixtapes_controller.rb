class MixtapesController < ApplicationController

  before_action :check_if_logged_in, except: [ :index, :show ]

  def new
    @mixtape = Mixtape.new # for the 'form_with'
  end

  def create
    # We need to set the .user_id of the mixtape from @current_user
    # BUT that means the user has to be logged in!
    # So we need to lock down the mixtape routes, to ensure that
    # only logged-in users can see them

    # Mixtape.new with strong params creates the object in memory, with
    # the column attributes filled in from the form params... but not saved to DB
    mixtape = Mixtape.new mixtape_params
    mixtape.user_id = @current_user.id # this mixtape belongs to the logged-in user
    mixtape.save  # actually do DB 'INSERT'

    # Add the user ID to this mixtape

    # 1. Set attribute after .create, and then .save
    # mixtape.user_id = @current_user.id
    # mixtape.save

    # 2. Use .update instead of setting attribute and .save as separate steps
    # mixtape.update user_id: @current_user.id

    # 3. Use the '<<' to add to a many association
    # @current_user.mixtapes << mixtape



    redirect_to mixtape_path( mixtape.id ) # go to show page
  end

  def index
  end

  def show
    @mixtape = Mixtape.find params[:id]
  end

  def edit
    @mixtape = Mixtape.find params[:id]
    redirect_to login_path unless @mixtape.user_id == @current_user.id
  end

  def update
    mixtape = Mixtape.find params[:id]

    # Don't perform the edit unless the mixtape belongs to the user
    # redirect_to login_path and return unless mixtape.user_id == @current_user.id
    if mixtape.user_id != @current_user.id
      redirect_to login_path
      return
    end #if

    mixtape.update mixtape_params # strong params
    redirect_to mixtape_path(mixtape.id)
  end #update


  def destroy
  end

  private

  def mixtape_params
    params.require(:mixtape).permit(:title, :image)
  end

end  # class MixtapesController
