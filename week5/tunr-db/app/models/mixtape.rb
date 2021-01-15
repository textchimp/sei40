class Mixtape < ApplicationRecord

  has_and_belongs_to_many :songs

  belongs_to :user, optional: true

  # Geocoding
  after_validation :geocode

  # Either this (if your address is all in one column):
  geocoded_by :address

  # # or this, if your address is broken into separate columns:
  # geocoded_by :full_address
  #
  # def full_address
  #   "#{street_number} #{street_name}, #{suburb} #{postcode} #{state}"
  # end

end
