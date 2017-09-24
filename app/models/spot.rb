# == Schema Information
#
# Table name: spots
#
#  id             :integer          not null, primary key
#  headline       :string           not null
#  description    :string           not null
#  location       :string           not null
#  img_url        :string
#  rating         :integer          not null
#  number_of_beds :string           not null
#  user_id        :integer          not null
#  price          :integer          not null
#  room_type      :string           not null
#  cancellations  :string           not null
#  house_rules    :string
#  reviews        :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Spot < ApplicationRecord

  validates :headline, :description, :location,
            :rating, :number_of_beds, :user_id,
            :price, :room_type, :cancellations,
            presence: true

  validates :headline, length: { maximum: 40 }

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end
