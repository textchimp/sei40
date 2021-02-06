class AddGeocodingFieldsToMixtapes < ActiveRecord::Migration[5.2]
  def change
    add_column :mixtapes, :address, :text
    add_column :mixtapes, :latitude, :float
    add_column :mixtapes, :longitude, :float
  end
end
