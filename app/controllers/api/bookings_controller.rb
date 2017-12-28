class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.find(spot_id: params[:spot_id])
  end

  def show
    @bookings = Booking.where(user_id: params[:id])
    if @bookings.length != 0
      render :show
    else
      render json: ["No bookings found"]
    end
  end

  def create
    p "hello\n"
    p params
    @booking = Booking.new(booking_params)
    if @booking.save!
      render :index
    else
      render json: @booking, status: :unprocessable_entity
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:spot_id, :user_id,
                                    :checkin_date, :checkout_date)
  end
end
