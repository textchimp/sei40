class FlightsController < ApplicationController

  def search
    flights = Flight.where( origin: params[:origin], destination: params[:destination] )
    render json: flights,
      except: [:airplane_id, :created_at, :updated_at], # leave out of flight info
      methods: [:departure_date_formatted], # include the departure_date_formatted method
      include: {
        airplane: { only: [:name] } # only include the airplane association's name field
      }

  end # search

  def show
    render json: Flight.find( params[:id] ) # TODO: include associations
  end #show

  def create_reservation
  end # create_reservation

end
