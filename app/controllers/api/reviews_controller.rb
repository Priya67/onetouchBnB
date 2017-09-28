class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def index
    @reviews = Review.find(spot_id: params[:spot_id])
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :spot_id)
  end
end
