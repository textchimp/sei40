class Album < ApplicationRecord
  # An album has many songs
  has_many :songs

  # An album is made by artist - we'll find the artist
  # by going through songs, and getting their artist_id
  has_many :artists, through: 'songs'

  # You can write your own custom methods here!
  # This is where your business logic should live:
  # "Skinny controllers, fat models"

  def artist
    # What is the .artists method being called on here?
    # The default behaviour in Ruby is to see if the method
    # exists for the current object, i.e. the instance
    # In JS, you would have to write: 'this.artists'
    self.artists.first
    # ^ 'self.' is the default, so it can be left out
  end

  # puts will look for to_s to try to get the string representation of an object
  def to_s
    "The album is called: '#{ title }'"
  end


end
