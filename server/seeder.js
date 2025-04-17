import { pool } from './db.js';
import // read library.sql and execute it
fs from 'fs';

var createTablesQuery = fs.readFileSync('../create.sql').toString();
var insertDataQuery = fs.readFileSync('../insert.sql').toString();

pool.query(createTablesQuery, (createTablesError) => {
  if (createTablesError) {
    console.error('Error creating tables:', createTablesError);
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
