class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.find(spot_id: params[:spot_id])
  end

  def show
    @booking = Booking.find(params[:id])
    if @booking
      render :show
    else
      render json: ["Invalid booking"]
    end
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.user = current_user
    if @booking.save
      render :show
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
