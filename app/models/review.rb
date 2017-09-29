class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :spot,
  primary_key: :id,
  foreign_key: :spot_id,
  class_name: :Spot

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

end
