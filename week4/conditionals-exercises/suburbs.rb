# Sydney Suburbs
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing (you should be able to give a custom response for at least 3 different suburbs).
# If the program does not recognise the suburb, print a generic message like "Sounds nice!"
# BONUS: use a case statement instead of an if-elsif chain to solve the surburns exercise.

print "What is your suburb? "
suburb = gets.chomp.downcase

# if suburb == "bondi"
#   puts "Nice boat shoes."
# elsif suburb == "manly"
#   puts "Surf's up bro! Watch out for tourists"
# elsif suburb == "newtown"
#   puts "Cool tatt. Smash the state."
# else
#   puts "I'm sure it's very nice there."
# end

# Most if-else-if chains can be turned into cleaner case statements:
#
# case suburb
# when "bondi"   then puts "Nice boat shoes"
# when "manly"   then puts "Surf's up bro! Watch out for tourists"
# when "newtown" then puts "Cool tatt. Smash the state."
# else                puts "I'm sure it's very nice there."
# end

# But since if and case statements also return values in Ruby,
# we can make this even more minimal: case statements evaluate
# to (return/spit out/boil down to) the value of the last line
# in the block that actually gets run. So we can 
# get this case statement to create a mapping, returning a
# specific output string when it sees a specific input string.
# (You can also use objects ("hashes") to do this!)
result = case suburb
when "bondi"   then "Nice boat shoes"
when "manly"   then "Surf's up bro! Watch out for tourists"
when "newtown" then "Cool tatt. Smash the state."
else                "I'm sure it's very nice there."
end

puts result
