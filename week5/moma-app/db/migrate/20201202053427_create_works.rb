class CreateWorks < ActiveRecord::Migration[5.2]
  def change
    create_table :works do |t|
      t.text :title
      t.string :year
      t.string :medium
      t.text :style
      t.text :image

      t.timestamps
    end
  end
end
