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

ActiveRecord::Schema.define(version: 2020_12_09_034357) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.text "title"
    t.text "image"
    t.string "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "artists", force: :cascade do |t|
    t.text "name"
    t.text "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genres", force: :cascade do |t|
    t.text "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genres_songs", force: :cascade do |t|
    t.integer "genre_id"
    t.integer "song_id"
  end

  create_table "mixtapes", force: :cascade do |t|
    t.text "title"
    t.text "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.text "address"
    t.float "latitude"
    t.float "longitude"
  end

  create_table "mixtapes_songs", force: :cascade do |t|
    t.integer "song_id"
    t.integer "mixtape_id"
  end

  create_table "songs", force: :cascade do |t|
    t.text "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "artist_id"
    t.integer "album_id"
  end

  create_table "users", force: :cascade do |t|
    t.text "email"
    t.text "password_digest"
    t.text "name"
    t.text "image"
    t.boolean "verified"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
