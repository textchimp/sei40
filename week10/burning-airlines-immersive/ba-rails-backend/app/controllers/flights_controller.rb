class FlightsController < ApplicationController

  def search
    render json: Flight.where( origin: params[:origin], destination: params[:destination] )
  end # search

  def show
    render json: Flight.find( params[:id] ) # TODO: include associations
  end #show

  def create_reservation
  end # create_reservation

end
