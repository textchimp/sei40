
# ARGF is a special Ruby variable which means
# approximately "open all the text files mentioned
# in this command (not including this .rb file itself)"
# and read all their lines into an array

# ARGF.each do |line|
#   puts line if line =~ /fred/
# end

# Modify the previous program to allow Fred to match as well. Does it match now if your input string is Fred, frederick, or Alfred? (Add lines with these names to the text file.)
# ARGF.each do |line|
#   # puts line if line =~ /fred/i  -- lets through all uppercase
#   puts line if line =~ /[Ff]red/
#   # puts line if line =~ /fred|Fred/
# end


# Make a program that prints each line of its input that contains a period (.), ignoring other lines of input. Try it on the small text file from the previous exercise: does it notice Mr. Slate?
# ARGF.each do |line|
#   puts line if line =~ /\./
# end


# Make a program that prints each line that has a word that is capitalized but not ALL capitalized. Does it match Fred but neither fred nor FRED?
# ARGF.each do |line|
#   puts line if line =~ /[A-Z][a-z]/
# end


# Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.
# ARGF.each do |line|
#   puts line if line =~ /(\S)\1/
# end


# Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

ARGF.each do |line|
  # puts line if line =~ /fred.*wilma|wilma.*fred/
  puts line if line.include?('fred') && line.include?('wilma')
  # puts line if line =~ /[fw][ri][le][dm][a]/
end
