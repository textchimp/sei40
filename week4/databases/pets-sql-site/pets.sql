-- This file will create the structure of the
-- 'pets' table, and will also insert some
-- test (aka 'seed') data into it, i.e.
-- insert some rows into the pets table

-- nuke the table so we can easily
-- re-initialise our database by running
-- 'sqlite3 database.db < pets.sql'
DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
  id INTEGER PRIMARY KEY AUTOINCREMENT, -- take care of the IDs for us
  name TEXT,
  species TEXT,
  description TEXT,
  roundness INTEGER,
  alive BOOLEAN,
  age INTEGER,
  image_url TEXT
);


INSERT INTO pets ( name, species, description, roundness, alive, age, image_url )
  VALUES (
    'Ruby',
    'Canine',
    'The best dog',
    3, -- not very round
    1, -- TRUE
    4,
    'https://images.unsplash.com/photo-1519138130-85a949fdcb4f?ixlib=rb-0.3.5&s=f340825cae4a33e3034dd209eb8c7355&w=1000&q=80'
  );

INSERT INTO pets ( name, species, description, roundness, alive, age, image_url )
  VALUES (
    'Clarence Boddicker',
    'Human',
    'Baddie',
    8, -- quite round
    0, -- FALSE (dead)
    50,
    'https://vignette.wikia.nocookie.net/robocop/images/d/dc/ClarenceBoddicker.jpg/revision/latest/scale-to-width-down/350?cb=20160816063931'
  );


INSERT INTO pets ( name, species, description, roundness, alive, age, image_url )
  VALUES (
    'Kermit',
    'Desert Frog',
    'Extremely round, also quite sneaky',
    9, -- VERY round
    1, -- TRUE, aka alive
    3,
    'https://i.pinimg.com/originals/40/8c/91/408c91147f943416d6fc3755a3a45f14.jpg'
  );
