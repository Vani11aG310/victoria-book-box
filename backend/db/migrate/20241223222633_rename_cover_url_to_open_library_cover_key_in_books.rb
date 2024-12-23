class RenameCoverUrlToOpenLibraryCoverKeyInBooks < ActiveRecord::Migration[7.0]
  def change
    rename_column :books, :cover_url, :open_library_cover_key
  end
end
