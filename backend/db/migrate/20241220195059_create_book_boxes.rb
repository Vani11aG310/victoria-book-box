class CreateBookBoxes < ActiveRecord::Migration[7.0]
  def change
    create_table :book_boxes do |t|
      t.string :name
      t.string :address
      t.float :latitude
      t.float :longitude
      t.references :user, foreign_key: true, index: true

      t.timestamps
    end
  end
end
