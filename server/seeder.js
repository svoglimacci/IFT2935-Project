import { pool } from './db.js';

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    lastname VARCHAR(255)
  )
`;

const insertDataQuery = `
  INSERT INTO users (name, lastname) VALUES
  ('John', 'Doe'),
  ('Alice', 'Smith')
`;

pool.query(createTableQuery, (createTableError) => {
  if (createTableError) {
    console.error('Error creating table:', createTableError);
    pool.end();
  } else {
    pool.query(insertDataQuery, (insertDataError) => {
      if (insertDataError) {
        console.error('Error inserting data:', insertDataError);
      } else {
        console.log('Data inserted successfully!');
      }

      pool.end();
    });
  }
});
