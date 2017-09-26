class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :spot,
  primary_key: :id,
  foreign_key: :spot_id,
  class_name: :Spot
  
end
