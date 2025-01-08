class RemoveLatitudeLongitudeFromBookBoxes < ActiveRecord::Migration[7.0]
  def change
    remove_column :book_boxes, :latitude, :float
    remove_column :book_boxes, :longitude, :float
  end
end
