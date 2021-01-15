
# iterative version
def countdown( n=8 )

  while n >= 0

    puts n

    # Do something each iteration that gets us
    # incrementally closer to getting out of
    # this loop:
    n = n - 1

    sleep 0.3  # drama
  end # while

  puts "Blast off!"

end #countdown


# actually run the above function
# countdown()


# recursive version

# variables (constants)
# functions
# conditionals
# e.g. Clojure has no looping structures! You MUST use recursion


def countdown_rec( n=10 )

  # Define a "base case": a condition under which
  # this function STOPS calling itself recursively;
  # otherwise, you will have an infinite loop/regress
  # (actually you won't, you will just exceed the stack)
  if n < 0
    puts "Blast off!"
  else
    # Not finished counting, so perform recursive call
    #
    # BUT: we have to do so in a way that brings us
    # a step closer to reaching the base case defined
    # above, which stops the recursion (otherwise, infinite
    # loop)
    puts n
    sleep 0.3

    countdown_rec( n - 1 )  # recursive call

    puts "Returned! (n = #{n})"


  end # else


end # countdown_rec


countdown_rec(2)  # start the process by calling the function
