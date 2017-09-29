json.extract! booking, :id, :spot_id, :user_id, :checkin_date, :checkout_date

json.user do
  json.extract! booking.user, :id, :img_url, :username
end

json.spot do
  json.extract! booking.spot, :id, :img_url, :headline
end
