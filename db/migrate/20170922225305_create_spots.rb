class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.string :headline, null: false
      t.string :description, null: false
      t.string :location, null: false
      t.string :img_url
      t.integer :rating, null: false
      t.string :number_of_beds, null: false
      t.integer :number_of_guests, null: false
      t.integer :number_of_bedroom, null: false
      t.integer :number_of_bathroom, null: false
      t.integer :user_id, null: false
      t.integer :price, null: false
      t.string :room_type, null: false
      t.string :cancellations, null: false
      t.string :house_rules
      t.string :reviews
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :city, null: false

      t.timestamps
    end
  end
end
