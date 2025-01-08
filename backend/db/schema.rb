# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2025_01_08_215647) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "book_boxes", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "open_library_cover_key"
    t.string "open_library_key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "author"
    t.string "subject"
  end

  create_table "collections", force: :cascade do |t|
    t.integer "quantity"
    t.bigint "book_id"
    t.bigint "book_box_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_box_id"], name: "index_collections_on_book_box_id"
    t.index ["book_id", "book_box_id"], name: "index_collections_on_book_id_and_book_box_id", unique: true
    t.index ["book_id"], name: "index_collections_on_book_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wishlists", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "book_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_wishlists_on_book_id"
    t.index ["user_id", "book_id"], name: "index_wishlists_on_user_id_and_book_id", unique: true
    t.index ["user_id"], name: "index_wishlists_on_user_id"
  end

  add_foreign_key "collections", "book_boxes"
  add_foreign_key "collections", "books"
  add_foreign_key "wishlists", "books"
  add_foreign_key "wishlists", "users"
end
