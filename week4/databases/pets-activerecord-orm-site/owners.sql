
DROP TABLE IF EXISTS owners;

CREATE TABLE owners (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
);

INSERT INTO owners ( name, email )
  VALUES ( 'Zara', 'zara@ga.co' );

INSERT INTO owners ( name, email )
  VALUES ( 'Luke', 'luke@ga.co' );

INSERT INTO owners ( name, email )
  VALUES ( 'Lay', 'lay@ga.co' );

INSERT INTO owners ( name, email )
  VALUES ( 'Mikaela', 'mikaela@ga.co' );
