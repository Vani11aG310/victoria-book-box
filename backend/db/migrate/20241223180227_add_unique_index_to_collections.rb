class AddUniqueIndexToCollections < ActiveRecord::Migration[7.0]
  def change
    add_index :collections, [:book_id, :book_box_id], unique: true, name: 'index_collections_on_book_id_and_book_box_id'
  end
end
