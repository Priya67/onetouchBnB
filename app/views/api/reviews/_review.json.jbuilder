json.extract! review, :id, :rating, :body, :spot_id, :author_id

json.author do
  json.extract! review.author, :id, :img_url, :username
end
