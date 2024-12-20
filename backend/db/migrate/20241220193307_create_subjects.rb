class CreateSubjects < ActiveRecord::Migration[7.0]
  def change
    create_table :subjects do |t|
      t.string :name
      t.string :open_library_key

      t.timestamps
    end
  end
end
