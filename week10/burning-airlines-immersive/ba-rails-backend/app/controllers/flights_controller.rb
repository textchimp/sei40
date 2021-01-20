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
    render json: Flight.find( params[:id] ),
      except: [:departure_date, :created_at, :updated_at, :airplane_id ],
      methods: [:departure_date_formatted],
      include: {
        airplane: { only: [:name, :rows, :cols] },
        reservations: { only: [:col, :row, :user_id] }
      }

  end #show

  def create_reservation
  end # create_reservation

end
