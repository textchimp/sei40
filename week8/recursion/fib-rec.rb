# Recursive version
#
# fib(n) = fib(n-1) + fib(n-2)
#
# indexes:  0, 1, 2, 3, 4, 5,  6,  7
# sequence: 1, 1, 2, 3, 5, 8, 13, 21, etc
$call_count = 0

# TODO: "memoize" the fib() calls
# i.e. Create a hash, and each time the function runs,
# it FIRST checks if the current argument n is already
# a key in that hash - i.e., have we already recursively
# calcuated the nth fibonacci number.
# If we have (i.e. the key exists), then just return the
# key's value instead of performing the 2x recursive calls.
# If the key is not defined for this value of n,
# then perform the recursive calls, but SAVE the return
# value into your hash, so the next time the function runs,
# that key exists and we can use the saved value for that key
# instead of the expensive 2x recursive calls.
#
# i.e., increase the TIME efficiency of this function (run faster)
# by decreasing the SPACE efficiency (using more memory to store the hash )

def fib_rec( n )
  $call_count += 1
  # Define the base case
  if n < 2
    return 1
  else
    # do the recursive calculation:
    return fib_rec( n - 1 ) + fib_rec( n - 2 )
  end

end # fib_rec

puts fib_rec( ARGV.first.to_i )
puts "calls: #{ $call_count }"
