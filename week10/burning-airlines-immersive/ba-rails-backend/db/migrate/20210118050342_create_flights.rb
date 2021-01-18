class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.datetime :departure_date
      t.string :origin
      t.string :destination
      t.integer :airplane_id

      t.timestamps
    end
  end
end
