class Api::SpotsController < ApplicationController

  def index
    bounds = params[:bounds]
    @spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    # debugger
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def spot_params
    params.require(:spot).permit(
      :headline, :description, :location,
      :rating, :number_of_beds, :user_id,
      :price, :room_type, :cancellations,
      :city, :lng, :lat, :number_of_bathroom,
      :number_of_guests, :number_of_bedroom,
    )
  end
end
