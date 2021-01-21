class FlightsController < ApplicationController

  skip_before_action :verify_authenticity_token

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

    reservation = Reservation.create(
      row: params[:row],
      col: params[:col],
      flight_id: params[:id], # from the path /flights/:id/reservation
      user_id: 19,  # JUST FOR TESTING! should come from @current_user
      paid: false
    )

    # reservation = Reservation.create params

    # send the reservation object back to the frontend
    render json: reservation

  end # create_reservation

  # private
  #
  # def reservation_params
  #   # params.require(:???)
  #   # params.permit(:row, :col, :id, )
  # end

end # class FlightsController
