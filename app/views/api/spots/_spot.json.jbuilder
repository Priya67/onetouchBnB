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

json.reviews do
  json.array! spot.reviews do |review|
    json.extract! review, :id, :spot_id, :rating, :body

    json.author do
      json.extract! review.author, :id, :img_url, :username
    end
  end
end
