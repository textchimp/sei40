class Work < ApplicationRecord
  belongs_to :artist  # MANDATORY unless you add ', optional: true'
  # ^ use the 'artist_id' column in the 'works' table to follow the
  # association and get the Artist object that this Work belongs to
end
