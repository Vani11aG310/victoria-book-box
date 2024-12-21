class AddAuthorAndSubjectToBook < ActiveRecord::Migration[7.0]
  def change
    remove_column :books, :author_id, :bigint
    remove_column :books, :subject_id, :bigint
    add_column :books, :author, :string
    add_column :books, :subject, :string
    drop_table :authors
    drop_table :subjects
  end
end
