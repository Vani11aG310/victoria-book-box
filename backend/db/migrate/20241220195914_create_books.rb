class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :cover_url
      t.string :open_library_key
      t.references :author, foreign_key: true, index: true
      t.references :subject, foreign_key: true, index: true

      t.timestamps
    end
  end
end
