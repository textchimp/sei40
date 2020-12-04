class Genre < ApplicationRecord

  # This requires a 'genres_songs' join table to exist
  # with 'genre_id' and 'song_id' integer columns
  has_and_belongs_to_many :songs

end
