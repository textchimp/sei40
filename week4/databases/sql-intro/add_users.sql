-- To add rows to a table, we use the 'INSERT INTO' SQL command

INSERT INTO users ( id, email, name, password, profile_image, verified, age )
  VALUES (
    1,
    'luke@ga.co',
    'Luke',
    'chicken',
    'http://placekitten.com/200/200',
    1,  -- means TRUE
    12
  );

INSERT INTO users ( id, email, name, password, profile_image, verified, age )
  VALUES (
    2,
    'zara@ga.co',
    'Zara',
    'chicken',
    'http://placekitten.com/400/400',
    0,  -- means FALSE
    23
  );

INSERT INTO users ( id, email, name, password, profile_image, verified, age )
  VALUES (
    3,
    'lay@ga.co',
    'Lay',
    'chicken',
    'http://placekitten.com/100/400',
    0,  -- means FALSE
    26
  );
