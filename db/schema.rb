# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170929212626) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.integer "user_id", null: false
    t.date "checkin_date", null: false
    t.date "checkout_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id", "checkin_date", "checkout_date"], name: "index_bookings_on_spot_id_and_checkin_date_and_checkout_date", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body", default: "", null: false
    t.integer "rating", null: false
    t.integer "spot_id", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["spot_id"], name: "index_reviews_on_spot_id"
  end

  create_table "spots", force: :cascade do |t|
    t.string "headline", null: false
    t.string "description", null: false
    t.string "location", null: false
    t.string "img_url"
    t.integer "rating", null: false
    t.string "number_of_beds", null: false
    t.integer "number_of_guests", null: false
    t.integer "number_of_bedroom", null: false
    t.integer "number_of_bathroom", null: false
    t.integer "user_id", null: false
    t.integer "price", null: false
    t.string "room_type", null: false
    t.string "cancellations", null: false
    t.string "house_rules"
    t.string "reviews"
    t.float "lat", null: false
    t.float "lng", null: false
    t.string "city", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.string "phone_number", null: false
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
