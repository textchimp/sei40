class AddPriceToFruits < ActiveRecord::Migration[5.2]
  def change
    add_column :fruits, :price, :integer
  end
end
