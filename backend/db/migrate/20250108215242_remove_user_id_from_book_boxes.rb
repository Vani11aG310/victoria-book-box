class RemoveUserIdFromBookBoxes < ActiveRecord::Migration[7.0]
  def change
    remove_reference :book_boxes, :user, index: true, foreign_key: true
  end
end