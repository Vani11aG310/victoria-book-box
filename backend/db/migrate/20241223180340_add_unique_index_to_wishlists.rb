class AddUniqueIndexToWishlists < ActiveRecord::Migration[7.0]
  def change
    add_index :wishlists, [:user_id, :book_id], unique: true, name: 'index_wishlists_on_user_id_and_book_id'
  end
end
