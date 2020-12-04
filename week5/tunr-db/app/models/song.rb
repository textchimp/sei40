class Song < ApplicationRecord
  # Songs belong to ('are recorded by') an Artist
  belongs_to :artist, optional: true
  # We want to create songs and then connect them to
  # their artists later, so we need the artist_id
  # column to be optional (when we create the song)

  # Songs also belong to ('appear on') an album
  belongs_to :album, optional: true

  # A song can be an example of several genres, BUT
  # a genre should also have several songs in it...
  # so this is a many-to-many relationship
  #
  # This requires a 'genres_songs' join table to exist
  # with 'genre_id' and 'song_id' integer columns
  has_and_belongs_to_many :genres

  has_and_belongs_to_many :mixtapes

end
