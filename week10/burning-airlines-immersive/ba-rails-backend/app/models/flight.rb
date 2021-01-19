class Flight < ApplicationRecord

  belongs_to :airplane
  has_many :reservations

  def departure_date_formatted
    self.departure_date.strftime('%d %b %Y %I:%M%P')
  end

end
