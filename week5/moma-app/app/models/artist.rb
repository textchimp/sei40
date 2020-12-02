class Artist < ApplicationRecord
  has_many :works
  # ^ go to the 'works' table and use [current class name plural]_id
  # to find the matching IDs for this artist
end
