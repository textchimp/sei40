# Activity:
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

# Tell this program that you want to use a library (gem)
# a bit like <script src="js/colorize.js">
require 'colorize'

print "Enter the maximum guess value: "
max_guess = gets.to_i

secret_number = Random.rand 0..max_guess

# safe false guess, will never be correct,
# i.e. guaranteed to enter the loop
guess = -1

def get_guess
  print "Enter guess: "
  gets.to_i
end

until guess == secret_number

  guess = get_guess

  if guess > secret_number
    puts "Wrong! Too high.".red
  elsif guess < secret_number
    puts "Wrong! Too low.".yellow
  end

end  # until

puts "Congratulation! You guessed correctly.".green
