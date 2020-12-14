class AddTypeToFruits < ActiveRecord::Migration[5.2]
  def change
    add_column :fruits, :type, :string
  end
end
