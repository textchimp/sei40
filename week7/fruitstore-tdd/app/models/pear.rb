# This is a DERIVED (or CHILD) ActiveRecord model
# class - it inherits from one of our own models

# i.e. this is how Single Table Inheritance is
# implemented

# This model will still use the 'fruits' table
class Pear < Fruit

  validates :name, presence: true, uniqueness: true

  # override the 'squishy?' method that we inherit
  # from the parent class Fruit
  def squishy?

    # Methods like this are for storing CODE
    # rather than simple values - so if you
    # need to run some code to get an answer
    # about the properties of a model object,
    # this is the place to put it

    # This answer 'true' will apply to ALL Pears
    true
  end


end
