# == Schema Information
#
# Table name: spots
#
#  id                 :integer          not null, primary key
#  headline           :string           not null
#  description        :string           not null
#  location           :string           not null
#  img_url            :string
#  rating             :integer          not null
#  number_of_beds     :string           not null
#  number_of_guests   :integer          not null
#  number_of_bedroom  :integer          not null
#  number_of_bathroom :integer          not null
#  user_id            :integer          not null
#  price              :integer          not null
#  room_type          :string           not null
#  cancellations      :string           not null
#  house_rules        :string
#  reviews            :string
#  lat                :float            not null
#  lng                :float            not null
#  city               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Spot < ApplicationRecord

  validates :headline, :description, :location,
            :rating, :number_of_beds, :user_id,
            :price, :room_type, :cancellations,
            :city, :lng, :lat, :number_of_bathroom,
            :number_of_guests, :number_of_bedroom,
            presence: true

  validates :headline, length: { maximum: 40 }

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :reviews,
  primary_key: :id,
  foreign_key: :spot_id,
  class_name: :Review

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  def average_rating
    reviews.average(:rating)
  end
  
end
