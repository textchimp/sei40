
require 'pry'

# Classes are always capitalised camel case in Ruby

class Person

  # shortcut for writing a getter + setter for an
  # instance variable:
  attr_accessor :age, :height  #, :height, :birth_date

  # This is a "class method" - you call it directly
  # on the class itself, not on an object instance
  # of the class
  def self.describe
    puts "This is a class for creating people... and also apparently for breeding them."
  end

  # Create a method which will "expose" the hidden
  # instance variable @name to any code outside this
  # class which is working with an instance of this
  # class (an object made with Person.new
  # i.e this gets the value for us, it's a GETTER
  def name
    @name  # implicit return
  end

  def +( other_person )
    baby_name = @name + ' ' + other_person.name
    Person.new baby_name, 0
  end


  # Define a SETTER: a method that lets us change
  # what's in this instance variable, from outside
  # this class (i.e. when working with an object)
  def name=( val )
    @name = val
  end

  # This is called the 'constructor' method;
  # if we define it in our class, this is the method
  # that actually gets called when you run 'Person.new'
  def initialize( name, age )
    puts "Making a new Person called #{ name }"

    # Save the argument into an instance variable
    # so we can use this data in all the methods
    # of this class - it becomes "global" within
    # the object (but each new object will have
    # a unique version of this variable)
    @name = name
    @age = age

  end # initialize()


  def hello

    puts "Hello there! My name is #{ @name } and I am #{ @age } years old."
  end # hello()


  def goodbye
    puts "It was great to meet you! Please follow me on Instagram and smash that Like button!"
  end # goodbye()


end  # Person


# Inheritance!
# Let's make a new, more specific type of Person
# called a Comedian
# They will inherit most of their data and behaviour
# (methods) from the "parent" class, Person
# But they might add some specific behaviour of their
# own

# "CLASSES ARE CLOSED FOR MODIFICATION,
# BUT OPEN FOR EXTENSION" ... via inheritance

class Comedian < Person


  def initialize( name )
    super name, 20   # hard-code the age argument
    puts "Making a comedian"

  end # initialize()

  def tell_joke
    print "What's brown and sticky?"
    5.times do
      print '.'
      sleep 0.2
    end
    puts "a stick!"
  end # tell_joke()


  # Re-define ('override') a method that this class
  # inherited from its parent class, Person
  def hello
    # Run the version of 'hello' that is defined in the parent class, Person
    super
    # .... and THEN, add some custom behaviour:
    puts "Please watch my Netflix special and come to my shows."
  end


end  # Comedian



binding.pry
