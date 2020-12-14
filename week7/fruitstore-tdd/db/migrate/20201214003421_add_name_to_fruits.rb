class AddNameToFruits < ActiveRecord::Migration[5.2]
  def change
    add_column :fruits, :name, :string
  end
end
