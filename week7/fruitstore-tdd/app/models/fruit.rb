class Fruit < ApplicationRecord

  belongs_to :shelf #, optional: true

  validates :name, presence: true

  # "Fruit (and derived models) is not squishy by default"
  def squishy?
    false
  end

end

# This model uses the DB table 'fruits'

# What if we want to distinguish between different kinds
# of fruits - i.e. Pear, Apple, Peach, etc

# If we make a new model for each of these, we have to make
# new DB table for each of them too - even though they all
# have a lot in common - name, price, squishiness

# Single Table Inheritance:
# Use one table to store many different kinds of models that
# are related to each other
