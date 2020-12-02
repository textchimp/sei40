# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


puts "Creating Artists..."

Artist.destroy_all  # delete every row in the 'artists' table before we start

lee = Artist.create!(
  name: 'Lee Krasner',
  nationality: 'USA',
  dob: '1908/10/27',   # must use the right string format for this date!
  period: '20th century',
  image: 'https://i.pinimg.com/736x/05/62/14/0562148ce05f206e7ad773dc65d565bc--lee-krasner-abstract-expressionism.jpg',
  roundness: 7,
  bio: 'Abstract Expressionist'
)

jenny = Artist.create!(
  name: 'Jenny Holzer',
  nationality: 'USA',
  dob: '1950/05/15',   # must use the right string format for this date!
  period: '20th century',
  image: 'https://www.the-smalltalk.com/wp-content/uploads/2019/05/LeadImage_APRIL3.jpg',
  roundness: 5,
  bio: 'Conceptual/Text'
)

max = Artist.create!(
  name: 'Max Ernst',
  nationality: 'German',
  dob: '1891/04/02',   # must use the right string format for this date!
  period: '20th century',
  image: 'http://www.max-ernst.com/images/max-ernst-photo.jpg',
  roundness: 8,
  bio: 'Surrealist'
)


puts "Done! Created #{ Artist.count } artists:"
puts Artist.pluck(:name).join(', ')


# Works seeds ################################

puts "Creating Works..."

Work.destroy_all  # avoid duplicates when re-running seed file

Work.create!(
  title: 'Gothic Landscape',
  year: '1961',
  medium: 'oil on canvas',
  style: 'abstract expressionism',
  image: 'http://www.tate.org.uk/art/images/work/T/T03/T03291_10.jpg',
  artist_id: lee.id
)

Work.create!(
  title: 'Protect Me From What I Want',
  year: '1988',
  medium: 'text',
  style: 'conceptual/text',
  image: 'https://www.sleek-mag.com/wp-content/uploads/2019/03/jenny-holzer-protect-me-times-square.jpg',
  artist_id: jenny.id
)

Work.create!(
  title: 'Some Days You Wake Up...',
  year: '1998',
  medium: 'text on bronze plaque',
  style: 'conceptual/sculpture',
  image: 'https://www.moma.org/media/W1siZiIsIjIwMTQ4NiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f4a128f8dd237338',
  artist_id: jenny.id
)

Work.create!(
  title: 'City with Animals',
  year: '1930',
  medium: 'oil on wood',
  style: 'surrealism/cubism',
  image: 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/1914/01/48.1172.280_web.jpg?w=870',
  artist_id: max.id
)

Work.create!(
  title: 'Die Versuchung des heiligen Antonius',
  year: '1946',
  medium: 'oil on canvas',
  style: 'surrealism',
  image: 'http://www.dandy-club.com/wp-content/uploads/2013/01/main.jart2_.jpg',
  artist_id: max.id
)

puts "Done! Created #{ Work.count } works:"
puts Work.pluck(:title).join(', ')
