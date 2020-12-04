class CreateGenresSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :genres_songs do |t|
      t.integer :genre_id
      t.integer :song_id
    end
  end
end
