# Iterative fibonacci sequence

# indexes:  0, 1, 2, 3, 4, 5,  6,  7
# sequence: 1, 1, 2, 3, 5, 8, 13, 21, etc

def fib( n )

  a = 1
  b = 1

  n.times do
    temp = a
    a = b
    b = a + temp
  end

  a  # return a, which is the nth fibonacci number

end # fib

puts fib( ARGV.first.to_i )
