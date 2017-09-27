json.extract! spot, :id, :headline, :description,
                    :img_url, :rating, :number_of_beds,
                    :user_id, :price, :room_type,
                    :cancellations, :house_rules,
                    :number_of_bedroom, :number_of_guests,
                    :number_of_bathroom, :lat, :lng, :city,
                    :location

json.user do
  json.extract! spot.user, :id, :username, :img_url, :fname, :lname
end

json.user do
  json.extract! spot.reviews, :id, :spot_id, :rating
end
