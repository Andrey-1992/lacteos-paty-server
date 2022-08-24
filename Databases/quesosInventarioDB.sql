CREATE DATABASE fabricaquesosinv;

CREATE TABLE quesosinventario(
  id SERIAL PRIMARY KEY,
  quesoname VARCHAR(20) NOT NULL,
  quesostatus VARCHAR(20),
  quesoavailability BOOLEAN,
  nopieces INT,
  nopiecessalida INT,
  weigth INT,
  weigthcurrent INT,
  holladas INT,
  datein DATE NOT NULL,
  dateout DATE,
  price INT,
  approvepord VARCHAR(20),
  approvedprodsalida VARCHAR(20),
  nopiecessalida VARCHAR(20),
  lotenum VARCHAR(20),
  refrigeratiotype VARCHAR(20)
);





  /*
  Need to add an extra key for approving the transaction
  from -  Production to Admin - 
  adminapproved BOOLEAN,
  */
  /* 
  To add a new column in an existing Table:
  ALTER TABLE table_name ADD new_column_name column_definition;
  */
  /*
  New created or added records to the table:
  1. "approvepord": VARCHAR null - had been created now/ 
  2. approvedprodsalida - VARCHAR
  3.nopiecessalida - INT
  4. weigthcurrent
  5. refrigeratiotype
  */
  /* 

INSERT INTO quesosinventario(
  quesoname, 
  quesostatus, 
  quesoavailability,
  nopieces,
  holladas,
  datein,
  price
) VALUES(
  'Baraloso',
  'Entrada',
  true,
  80,
  22,
  '2022/06/23',
  14.50
);

/*
Useful Commands:
List all Tables:
\l

Change to a table:
\c table-name

See the infor from tables:
\dt
\d table-name

View all Records:
SELECT * FROM table-name;

Change the name of a colum from a table:
ALTER TABLE quesosinventario 
RENAME COLUMN nppiecescurrent TO nopiecessalida
*/