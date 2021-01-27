
require 'pry'

# What would you do if you didn't have arrays in your language?



class SinglyLinkedList

  # Node is ONLY available via SinglyLinkedList methods,
  # since it's nested within the SLL class

  # This is called a 'mixin', it adds extra methods to your class
  # Kind of like 'multiple inheritance'
  include Enumerable

  # 'Interface Abstraction' - just by defining 'each', the mixin
  # Enumerable can use .each to add dozens of array-type methods
  # to our class

  attr_accessor :head  # to point to the first node in the list

  def initialize( value=nil )
      # Create a new instance of the Node class,
      # and forward on the value argument this SLL
      # constructor receives as the value of the
      # initial Node in this list.
      @head = Node.new( value ) if value
  end # initialize


  def prepend( val )
    # Create a new node to store the new value
    new_node = Node.new val

    # Whatever the *current* head of the list is,
    # that becomes the 'next' for the new node, since
    # the new node is going at the start of the list
    new_node.next = @head

    # The new head of the list is this new node
    @head = new_node

  end # prepend


  def append( val )

    # 1. Find the last node in the list
    # i.e. start at @head, and keep moving through
    # every node until we get to the node whose .next
    # is nil - that's the last one
    # In other words, even just finding the last item
    # in a SLL is time complexity O( N ) - linear time
    # By contrast, accessing the last item in a regular array
    # is 'constant time' - O( 1 )

    node = @head
    # while node.next != nil     # can just write 'while node.next'
    #   puts node.value
    #   node = node.next  # kind of like i++, advance to next item
    # end  # while
    self.each { |n| node = n }

    # After the end of the loop, 'node' will contain the last node;
    # so now we know where to append our new node
    node.next = Node.new val

  end # append

  # Ruby will look for the .to_s method to be defined on
  # any object you try to print using 'puts', and will
  # run the method to get a printable method. In this
  # way you can always provide a clear output for your
  # custom objects, even if they have weird internal structures
  def to_s
    output = ''

    # node = @head
    # while node.next != nil
    #   output += node.value + ', '
    #   node = node.next  # advance the 'current node' pointer
    # end # while
    each { |n| output += n.value + ', ' }

    output.delete_suffix ', '

    # output += node.value  # add the value of the last node
    # output  # return the finished string (implicitly)

  end  # to_s


  # Find a node in the list by its value
  def find( needle )

    # node = @head
    # while node != nil
    #   if node.value == needle
    #     return node
    #   end
    #   node = node.next # move on to next node
    # end # while

    each { |n| return n if n.value == needle }

    nil   # return this as a fallback if we didn't find a match

  end  # find


  def insert_after( node, value )

    new_node = Node.new value

    # Our new node points to the insert-after node's
    # next node
    new_node.next = node.next

    # The insert-after's next node is our new node
    node.next = new_node

  end # insert_after


  # HOMEWORK: implement these methods:


  def length
    # Returns the length of the list
    # - this will require iteration!
    # Bonus: make an instance variable
    # that increments when you prepend/append/insert
    # so that you will always know the current length
    # WITHOUT needing to loop through the list

    i = 0
    node = @head
    while node != nil
      i += 1  # increment our count of nodes
      node = node.next
    end # while

    i  # return the final count
  end

  # def []( n )  is how [n] is interpreted in Ruby
  def at_index( n )
    # Return the node at the specified index
    # AKA array-style indexing
    # Another name for this method is 'def []( n )'

    return nil unless n < self.length
    # raise IndexError.new('out of range') unless n < self.length

    node = @head
    n.times { node = node.next }

    node
  end

  alias_method :[], :at_index



  def reverse
    # Return a reversed version of the list
    # Don't change the original list, i.e. non-destructive

    reversed = SinglyLinkedList.new

    node = @head
    while node != nil
      reversed.prepend node.value
      node = node.next
    end

    reversed  # return the new, reversed list
  end

  def reverse!
    # Destructive version of .reverse,
    # i.e change self to be the reversed list
    # self = self.reverse
    @head = self.reverse.head
  end

  def shift
    # Remove the first item from the list
    # and return it

    first_node = @head
    @head = @head.next

    first_node.next = nil  # prevent the rest of the list from coming along!

    first_node
  end

  def delete( node )
    # Remove the specified node from the list
    # - this method expects an actual node, so you will
    # need to run .find or .at_index to get a node by value
    # Make sure you don't break the chain!

    curr_node = @head
    prev_node = nil
    while curr_node != nil

      if curr_node == node
        # found the node to delete, so 'rearrange the arrows' here
        prev_node.next = curr_node.next
        return true  # indicate that the delete worked
      end

      prev_node = curr_node  # keep track of this for the next iteration
      curr_node = curr_node.next

    end # while

    false  # this should never happen, as long as 'node' is in the list
  end


  # s.each do |n|
  #   puts n.value
  # end

  # BONUS:
  def each
    # This method must accept a block
    # Google 'yield'

    return nil unless block_given?

    node = @head
    counter = 0
    while node != nil
      # apply the block to each node in the list
      yield node, counter
      node = node.next  # advance to next node
      counter += 1
    end # while

    # THEN can you rewrite the above methods
    # using each (i.e. they won't need any 'while' loops anymore)
  end


  def map
    # As above but applies block to each value
    # and returns an array of those transformed values
  end

  # reduce??

  class Node

    # TODO: research Ruby 'Struct' to create a simple
    # data container class like this Node, in just 1 line

    attr_accessor :value, :next

    # def value   # GETTER
    #   @value
    # end
    #
    # def value=( val )    # SETTER
    #   @value = val
    # end

    def initialize( val )
      # save the Node.new( val ) argument to an instance variable
      @value = val

      @next = nil  # by default, there is no node after this one

    end  # initialize


  end  # class Node

end # class SinglyLinkedList


s = SinglyLinkedList.new 'Groucho'
s.prepend 'Chico'
s.prepend 'Harpo'


binding.pry # open this file in pry after it loads
