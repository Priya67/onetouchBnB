class Booking < ApplicationRecord

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :spot,
  primary_key: :id,
  foreign_key: :spot_id,
  class_name: :Spot

end
