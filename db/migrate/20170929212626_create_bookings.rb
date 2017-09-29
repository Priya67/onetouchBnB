class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null: false
      t.integer :user_id, null: false
      t.date :checkin_date
      t.date :checkout_date

      t.timestamps
    end
    add_index :bookings, :spot_id, unique: true
    add_index :bookings, :user_id, unique: true
  end
end
