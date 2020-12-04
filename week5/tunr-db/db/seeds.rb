# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


print "Creating songs..."
Song.destroy_all

s1 = Song.create! title: 'Achy Breaky Heart'
s2 = Song.create! title: 'Have a Safe Trip, Dear'
s3 = Song.create! title: 'Burn the Witch'
s4 = Song.create! title: 'Identikit'

puts "created #{Song.count} songs."


print "Creating artists... "
Artist.destroy_all

art1 = Artist.create! name: 'Bill Ray Cyrus'
art2 = Artist.create! name: 'June of 44'
art3 = Artist.create! name: 'Radiohead'

puts "created #{Artist.count} artists."


print "Creating albums... "
Album.destroy_all

alb1 = Album.create! title: 'Some Gave All', year: '1992'
alb2 = Album.create! title: 'Engine Takes to the Water', year: '1998'
alb3 = Album.create! title: 'A Moon-Shaped Pool', year: '2015'

puts "created #{Album.count} albums."

# Create associations from artists to their songs

# 'Achy Break Heart' is a song by 'Billy Ray Cyrus'
art1.songs << s1
# ActiveRecord is 'repurposing' (overloading) the '<<' operator
# which Ruby uses as an alias for array.push:
# here it means "The song s1 has its artist_id set to art1.id"

# 'Have a Safe Trip, Dear' is by 'June of 44'
art2.songs << s2

# Both 'Burn the Witch' AND 'Identikit' are by 'Radiohead'
art3.songs << s3 << s4

# Test the associations:
puts "Testing artist -< songs associations:"
puts "The song '#{ Song.first.title }' is by #{ Song.first.artist.name }"
puts "The artist #{ Artist.last.name } has the songs: #{ Artist.last.songs.pluck(:title).join(', ') }"


# Create associations from albums to their songs (set the album_id for songs)
alb1.songs << s1  # 'Achy Breaky Heart' (s1) is on 'Some Gave All' (alb1)
alb2.songs << s2  # 'Have a Safe Trip, Dear' (s2) is on 'Engine Takes to the Water' (alb2)
alb3.songs << s3 << s4  # Both 'Burn the Witch' (s3) and 'Identikit' (s4) are on 'A Moon-Shaped Pool' (alb3)

puts "Testing album -< songs associations:"
puts "The song '#{ Song.first.title}' is on the album '#{ Song.first.album.title }' "
puts "The album '#{ Album.last.title}' has the songs: #{ Album.last.songs.pluck(:title).join(', ') } "


print "Creating genres... "
Genre.destroy_all

g1 = Genre.create! name: 'Nautical Rock'
g2 = Genre.create! name: 'Math Rock'
g3 = Genre.create! name: 'Paranoid Art-Rock'
g4 = Genre.create! name: 'Country'
g5 = Genre.create! name: 'Sadcore'
g6 = Genre.create! name: 'IDM'

puts "created #{Genre.count} genres."

# Create Genre >-< Song many-to-many associations:

# In the table 'genres_songs', create a new row with
# song_id = s1.id, and genre_id = g4.id
s1.genres << g4

# This create TWO rows in the 'genres_songs' join table!
s2.genres << g1 << g2

s3.genres << g3 << g5
s4.genres << g3 << g5 << g6

# Because this is many-to-many, you could also start
# from the genre side:
# g1.songs << s1 << s2 << s3

# Test the genres >-< songs assocations:
puts "Genre '#{g3.name}' has songs: #{ g3.songs.pluck(:title).join(', ') }"
puts "Song '#{s4.title}' has genres: #{ s4.genres.pluck(:name).join(', ') }"


print "Creating mixtapes... "
Mixtape.destroy_all

m1 = Mixtape.create! title: 'Driving Songs'
m2 = Mixtape.create! title: 'Lockdown Blues'
m3 = Mixtape.create! title: 'Make-out Music'

puts "created #{Mixtape.count} mixtapes"

# Add songs to the mixtapes, i.e.
# create mixtapes >-< songs associations
m1.songs << s1 << s2 << s3 << s4
m2.songs << s1 << s4
m3.songs << s1 << s3

puts "Mixtape '#{ m1.title }' has the songs: #{ m1.songs.pluck(:title).join(', ') }"


print "Creating Users... "
User.destroy_all

u1 = User.create! email: 'luke@ga.co', password: 'chicken', name: 'Luke'
u2 = User.create! email: 'zara@ga.co', password: 'chicken', name: 'Zara'
u3 = User.create! email: 'lay@ga.co', password: 'chicken', name: 'Lay'

puts "created #{User.count} users."


# Add user -< mixtapes associations:
u1.mixtapes << m1 << m3
u2.mixtapes << m2

puts "User #{ User.first.name} has mixtapes: #{ User.first.mixtapes.pluck(:title).join(', ') } "
puts "Mixtape '#{Mixtape.first.title}' belongs to #{ Mixtape.first.user.name } "
