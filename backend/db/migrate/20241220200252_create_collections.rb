class CreateCollections < ActiveRecord::Migration[7.0]
  def change
    create_table :collections do |t|
      t.integer :quantity
      t.references :book, foreign_key: true, index: true
      t.references :book_box, foreign_key: true, index: true

      t.timestamps
    end
  end
end
