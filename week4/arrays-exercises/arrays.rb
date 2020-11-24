# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# days_of_the_week =  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
days_of_the_week =  %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }

p days_of_the_week

# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.

moved_day = days_of_the_week.pop    # remove Sunday from the end and store - changes the array
days_of_the_week.unshift moved_day  # put Sunday at the start of the array

# days_of_the_week.unshift( days_of_the_week.pop )  #one-liner

# days_of_the_week.rotate! -1  # RTFM

p days_of_the_week


# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days

# Reset array to original
days_of_the_week =  %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }

week_days = days_of_the_week[ 0..4 ]  # use a range to get a subset of the array
p week_days
weekend_days = days_of_the_week[ 5..6 ]
p weekend_days

# week_parts = [ week_days, weekend_days ]
week_parts = [
  days_of_the_week[ 0..4 ],  # 0: weekdays
  days_of_the_week[ 5..6 ]   # 1: weekends
]
p week_parts  #[1][0]

# 4. Remove either the weekdays or the weekends
# Your choice...
week_parts.pop
p week_parts

# 5. Sort the remaining days alphabetically

week_parts.first.sort!
p week_parts

# require 'pry'; binding.pry  # this causes pry to open at this particular line, pausing your program
