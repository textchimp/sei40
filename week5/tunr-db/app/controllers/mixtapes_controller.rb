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

    mixtape = Mixtape.create mixtape_params
    redirect_to mixtape_path( mixtape.id ) # go to show page
  end

  def index
  end

  def show
    @mixtape = Mixtape.find params[:id]
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def mixtape_params
    params.require(:mixtape).permit(:title, :image)
  end

end  # class MixtapesController
