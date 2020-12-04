class CreateMixtapesSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :mixtapes_songs do |t|
      t.integer :song_id
      t.integer :mixtape_id
    end
  end
end
