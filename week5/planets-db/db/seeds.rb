# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Use .create! because it fails loudly when it can't create
# an item for you - this helps us debug our seeds

Planet.destroy_all  # Clear the database table first

Planet.create!(
  name: 'Earth',
  image_url: 'https://scitechdaily.com/images/earth-losing-mass.jpg',
  orbit: 1,
  mass: 1,
  moons: 1
)

Planet.create!(
  name: 'Mars',
  image_url: 'https://space-facts.com/wp-content/uploads/mars.jpg',
  orbit: 687,
  mass: 0.33,
  moons: 2
)

Planet.create!(
  name: 'Venus',
  image_url: 'https://cdn.mos.cms.futurecdn.net/pNX8eVGowB6WT8tyrTMufk-1200-80.jpg',
  orbit: 0.5,
  mass: 0.7,
  moons: 0
)

Planet.create!(
  name: 'Jupiter',
  image_url: 'http://cdn.sci-news.com/images/enlarge4/image_5608_2e-Jupiter.jpg',
  orbit: 800,
  mass: 10_000,
  moons: 13
)



puts "Done! Created #{ Planet.count } planets."
puts Planet.pluck(:name).join(', ')
