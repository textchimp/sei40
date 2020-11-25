
text = "The dogs are happy and running in the park. The owners are watching the dogs run and laughing. The dogs are getting angry at the owners. Soon they feed."

# split the single string into an array of words on the space character
words = text.split ' '

# create our empty word frequency table - default value to 0 !
word_freq = Hash.new( 0 )

# words.select! { |word| word.length > 2 }

# loop through all the words in the array
words.each do |word|

  # word = word.downcase
  word.downcase!

  # for every word, check if it's already a key in our frequency table:
  #  if yes, just increment the count for that word
  #  if no, create a new key and initialise the value to 1

  # puts "Processing word: #{ word }: #{ word_freq[word] }"
  require 'pry'; binding.pry

  if word.length > 2
    word_freq[ word ] += 1
  end

  # if word_freq.has_key? word
  #   # already exists, so increment
  #   word_freq[ word ] += 1
  # else
  #   # not yet in hash, so initialise with 1
  #   word_freq[ word ] = 1
  # end

end # words.each


# print out in a nice table
word_freq.each do |word, freq|
  puts "#{word}: #{freq}"
end

# One liner for this whole thing?
