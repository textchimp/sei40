# Air Conditioning
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.

print "Enter current temp (c): "
current_temp = gets.to_f

print "Is the AC working? (y/n): "
ac_working = gets.chomp.downcase

print "Enter desired temp (c): "
desired_temp = gets.to_f

# p current_temp, ac_working, desired_temp

if ac_working == "y"
  puts "AC working!"
  if current_temp > desired_temp
    puts "Turn on the A/C Please"
  end
else
  puts "AC not working."
  if current_temp > desired_temp
    puts "Fix the AC now! It's hot..."
  else
    puts "Fix the AC whenever you can... It's cool, no rush..."
  end
end





# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."
